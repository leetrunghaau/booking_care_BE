const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const BookingSV = require("../services/Booking");
const DoctorSV = require("../services/doctor");
const PatientSV = require("../services/patient");
const moment = require("moment");
const MedicalRecordSV = require("../services/medical_records");
const { getVNGender, calculateAge } = require("../helpers/text");
const { formatVND, formatTime, calculateBMI, formatPhoneNumber } = require("../helpers/num");
const ScheduleSV = require("../services/schedule");
const { generateTimeSlots, availableTimeSlot, isMedicineStillInUse, calculateEndDate } = require('../helpers/time');
const PrescriptionSV = require("../services/prescriptions");
const VitalsSV = require("../services/vitals");
const FileStoreSV = require("../services/files-store");
const { objAllNull, normalizeEmptyToNull, pickFirstValid } = require("../helpers/obj");
const BookingFileSV = require("../services/booking-file");
const BookingPrescriptionSV = require("../services/booking-prescriptions");
const AllergySV = require("../services/allergy");
const { sendPrescriptionDetailEmail, sendAppointmentCancelledEmail, sendConsultationResultToPatient, sendAppointmentConfirmedToPatient } = require("../helpers/mailer");
const mailConfig = require("../../config/mail-config");
require('moment/locale/vi');
moment.locale('vi');



class DoctorAppointment {


  static async getAppointmentById(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) return resOk(res, null)
      const booking = await BookingSV.one(Number(id))
      if (!booking) return resOk(res, null)
      const patient = await PatientSV.one(booking.patientId)
      const doctor = await DoctorSV.one(booking.doctorId)
      const bookingHistoryDB = await BookingSV.historyPatient(patient.id)
      const bookingHistory = bookingHistoryDB.map(item => {
        return {
          date: item.day,
          diagnosis: item.reason,
          doctor: item.doctor?.hospital?.address ?? "Không có thông tin",
        }
      })

      let rss = {
        id: patient.id,
        patientName: patient.name,
        patientAvatar: patient.img,
        patientAge: new Date().getFullYear() - new Date(patient.dob).getFullYear(),
        patientGender: patient.gender,
        patientPhone: patient.phone,
        patientEmail: patient.user?.email ?? "Không có thông tin",
        patientAddress: patient.address,

        duration: booking.duration,
        price: booking.price,
        status: booking.status,
        symptoms: booking.reason,
        address: doctor.hospital?.address ?? (doctor.address ?? "Không có thông tin"),
        date: booking.day,
        time: booking.time,
        medicalHistory: bookingHistory,
        vitalSigns: {
          bloodPressure: "120/80 mmHg",
          heartRate: "75 bpm",
          temperature: "37.2°C",
          respiratoryRate: "16 bpm",
          weight: "68 kg",
          height: "170 cm",
        },
      }
      resOk(res, rss);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async byDay(req, res, next) {
    try {
      const toDay = new Date().toISOString().split('T')[0];
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, [])
      const rs = await BookingSV.allByDoctorADay(doctor.id, toDay);
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async byWeek(req, res, next) {
    try {
      const startOfWeek = moment(new Date).startOf('isoWeek').format('YYYY-MM-DD');
      const endOfWeek = moment(new Date).endOf('isoWeek').format('YYYY-MM-DD');
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, [])
      const rs = await BookingSV.allByDoctorFromTo(doctor.id, startOfWeek, endOfWeek);
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async byHistory(req, res, next) {
    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, []);

      const today = moment(new Date).format('YYYY-MM-DD');

      const rs = await BookingSV.allByDoctorFromTo(doctor.id, null, today);
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async byAll(req, res, next) {
    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, []);
      const rs = await BookingSV.allByDoctorFromTo(doctor.id, null, null); // không giới hạn thời gian
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async upfile(req, res, next) {
    try {
      if (!req.customFile) resOk(res, null, "Không có file được tải lên")
      const fileData = req.customFile;
      resOk(res, fileData);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getStatus(req, res, next) {
    try {

      const id = req.params.id
      if (!id || isNaN(Number(id))) return resOk(res, null, "Bạn cần truyền đúng thông tin");
      const booking = await BookingSV.one(id)
      if (!booking) return resOk(res, null)
      resOk(res, booking.status)
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const status = req.body.status
      const id = req.params.id
      if (!id || isNaN(Number(id))) return resOk(res, null, "Bạn cần truyền đúng thông tin");
      if (!status || !(['pending', 'confirmed', 'completed', 'cancelled'].includes(status)))
        return resOk(res, null, "Bạn cần truyền đúng thông tin.");

      const booking = await BookingSV.edit(id, { status: status })
      if (booking == 0) return resOk(res, null, "Không đổi được trạng thái booking")
      if (status == "completed") {
        // gọi thông tin
        const newBooking = await BookingSV.one(id);
        const newBookingFile = await BookingFileSV.allByBookingId(newBooking.id);
        const newPrescription = await BookingPrescriptionSV.allByBookingId(newBooking.id)
        const record = await MedicalRecordSV.up({
          patientId: newBooking.patientId,
          doctorId: newBooking.doctorId,
          bookingId: newBooking.id,
          visitDate: moment(new Date).format('YYYY-MM-DD'),
          reason: pickFirstValid(newBooking.reason, newBooking.symptoms, newBooking.diagnosis),
          symptoms: pickFirstValid(newBooking.symptoms, newBooking.reason, newBooking.diagnosis),
          diagnosis: newBooking.diagnosis,
          finalDiagnosis: newBooking.finalDiagnosis,
          notes: newBooking.notes,
          generalInstructions: newBooking.generalInstructions,
          temperature: newBooking.temperature,
          pulse: newBooking.pulse,
          bloodPressure: newBooking.bloodPressure,
          respiratoryRate: newBooking.respiratoryRate,
          weight: newBooking.weight,
          height: newBooking.height
        })
        await Promise.all(newBookingFile.map(iFile =>
          FileStoreSV.up({
            medicalRecordId: record.id,
            fileName: iFile.name,
            fileType: iFile.type,
            fileUrl: iFile.url
          })
        ))

        await Promise.all(newPrescription.map(ipr =>
          PrescriptionSV.up({
            medicalRecordId: record.id,
            useStart: moment(new Date()).format('YYYY-MM-DD'),
            name: ipr.name,
            dosage: ipr.dosage,
            usage: ipr.usage,
            duration: ipr.duration,
            notes: ipr.notes,
          })
        ))


        const patientForMail = await PatientSV.one(newBooking.patientId)
        const doctorForMail = await DoctorSV.one(newBooking.doctorId)
        const mailto = patientForMail.user?.email ?? patientForMail.email ?? null;
        if (mailto) {
          sendConsultationResultToPatient(
            mailto,
            {
              patientName: patientForMail.name,
              doctorName: doctorForMail.name,
              date: moment(newBooking.day).format('dddd, DD/MM/YYYY'),
              time: formatTime(newBooking.time),
              diagnosis: newBooking.diagnosis,
              conclusion: newBooking.finalDiagnosis,
              instructions: newBooking.notes,
              resultLink: `${mailConfig.FE_SERVER}/benh-nhan/lich-su-kham`
            }
          );
        }
      }
      if (status == "cancelled") {
        const bookingForMail = await BookingSV.one(Number(id));
        const patientForMail = await PatientSV.one(bookingForMail.patientId)
        const doctorForMail = await DoctorSV.one(bookingForMail.doctorId)
        const mailto = patientForMail.user?.email ?? patientForMail.email ?? null;
        if (mailto) {
          sendAppointmentCancelledEmail(
            mailto,
            {
              patientName: patientForMail.name,
              doctorName: doctorForMail.name,
              date: moment(bookingForMail.day).format('dddd, DD/MM/YYYY'),
              time: formatTime(bookingForMail.time),
              cancelReason: "bác sĩ có việc đột xuất",
              rebookLink: `${mailConfig.FE_SERVER}/dat-lich-kham`
            }
          );
        }
      }
      if (status == "confirmed") {
        const bookingForMail = await BookingSV.one(id);
        const patientForMail = await PatientSV.one(bookingForMail.patientId)
        const doctorForMail = await DoctorSV.one(bookingForMail.doctorId)
        const mailto = patientForMail.user?.email ?? patientForMail.email ?? null;
        if (mailto) {
          sendAppointmentConfirmedToPatient(
            mailto,
            {
              patientName: patientForMail.name,
              doctorName: doctorForMail.name,
              date: moment(bookingForMail.day).format('dddd, DD/MM/YYYY'),
              time: formatTime(bookingForMail.time),
              location: pickFirstValid(
                doctorForMail.hospital.address,
                doctorForMail.address,
                "Không có thông tin, vui lòng lên hệ với quản kỹ thuật viên để hể trợ"
              ),
              reason: bookingForMail.reason,
              manageLink: `${mailConfig.FE_SERVER}/benh-nhan/lich-kham/${bookingForMail.id}`
            }
          );
        }
      }
      resOk(res, true)
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async patient(req, res, next) {
    try {
      const id = req.params.id
      if (!id || isNaN(Number(id))) return resOk(res, null);
      const booking = await BookingSV.one(Number(id))
      if (!booking) return resOk(res, null);
      const rs = await PatientSV.one(booking.patientId)
      if (!rs) return resOk(res, null)
      resOk(res, {
        id: rs.id,
        img: rs.img,
        name: rs.name,
        age: `${calculateAge(rs.dob)} tuổi`,
        gender: getVNGender(rs.gender),
        phone: rs.phone,
        email: rs.user?.email ?? (rs.email ?? "Không có thông tin."),
        address: rs.address ?? "Không có thông tin."
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async patientRecord(req, res, next) {
    try {
      const id = req.params.id
      if (!id || isNaN(Number(id))) return resOk(res, null);
      const patient = await PatientSV.one(id)
      if (!patient) return resOk(res, null)
      const records = (await MedicalRecordSV.allBPantient(patient.id)).map(i => {
        return {
          id: i.id,
          visitDate: i.visitDate ?? "không có thông tin",
          doctorName: i.doctor?.name ?? "Không có thông tin",
          symptoms: i.symptoms,
          finalDiagnosis: i.finalDiagnosis,
          notes: i.notes,
          bloodPressure: i.bloodPressure,
          temperature: i.temperature,
          pulse: i.pulse,
          weight: i.weight,
          bmi: calculateBMI(i.weight, i.height),
        }
      })
      const recordIds = records.map(i => i.id);
      const prescriptions = (await PrescriptionSV.allByRecordId(recordIds)).map(i => {
        return {
          id: i.id,
          name: i.name,
          dosage: i.dosage,
          usage: i.usage,
          start: i.useStart,
          end: calculateEndDate(i.useStart, i.duration),
          isUser: isMedicineStillInUse(i.useStart, i.duration)
        }
      })
      const allergens = (await AllergySV.allBPatient(patient.id)).map(i => i.allergen)
      const files = (await FileStoreSV.allRecord(recordIds)).map(i => {
        return {
          id: i.id,
          name: i.fileName,
          type: i.fileType,
          uri: i.fileUrl,
          day: i.uploadedAt ?? "",
        }
      })

      resOk(res, {
        name: patient.name ?? "Không có thông tin",
        img: patient.img ?? null,
        age: patient.dob ? `${calculateAge(patient.dob)} tuổi` : "không xác định",
        gender: getVNGender(patient.gender),
        phone: formatPhoneNumber(patient.phone),
        address: patient.address ?? "",
        bloodPressure: records.length > 0 ? records[0].bloodPressure : "Không có thông tin",
        temperature: records.length > 0 ? records[0].temperature : "Không có thông tin",
        pulse: records.length > 0 ? records[0].pulse : "Không có thông tin",
        bmi: records.length > 0 ? records[0].bmi : "Không có thông tin",
        records: records,
        prescriptions: prescriptions,
        allergens: allergens,
        files: files

      })

    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async patientHistory(req, res, next) {
    try {
      const bookingId = Number(req.params.bookingId)
      if (!bookingId) return resOk(res, []);
      const booking = await BookingSV.one(Number(bookingId))
      if (!booking) return resOk(res, [])
      if (!booking.patientId) return resOk(res, [])

      const records = (await MedicalRecordSV.allBPantient(booking.patientId)).map(i => {
        return {
          id: i.id,
          visitDate: i.visitDate ?? "không có thông tin",
          doctorName: i.doctor?.name ?? "Không có thông tin",
          symptoms: i.symptoms ?? i.reason ?? i.diagnosis,
          finalDiagnosis: i.finalDiagnosis ?? "",
          notes: i.notes ?? "",
          bloodPressure: i.bloodPressure ?? "",
          temperature: i.temperature ?? "",
          pulse: i.pulse ?? "",
          weight: i.weight ?? "",
          bmi: calculateBMI(i.weight, i.height),
        }
      })
      resOk(res, records)

    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async bookingInfo(req, res, next) {
    try {
      const id = req.params.id
      if (!id || isNaN(Number(id))) return resOk(res, null, "Bạn cần truyền đúng thông tin");
      const rs = await BookingSV.one(id)
      if (!rs) return resOk(res, null)
      resOk(res, {
        id: rs.id,
        date: rs.day ? moment(rs.day, 'YYYY-MM-DD').format('DD/MM/YYYY') : "Không có thông tin",
        time: formatTime(rs.time),
        duration: rs.duration ? `${rs.duration} phút` : "Không có thông tin",
        price: formatVND(rs.price),
        address: rs.doctor?.hospital?.address ?? (rs.doctor?.address ?? "Không có thông tin"),
        symptoms: rs.reason,
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getExamination(req, res, next) {
    try {
      const id = req.params.id
      if (!id || isNaN(Number(id))) return resOk(res, null);
      const booking = await BookingSV.one(id)
      if (!booking) return resOk(res, null)
      const followUp = booking.followUpId ? (await BookingSV.one(booking.followUpId)) : null
      const files = await BookingFileSV.allByBookingId(booking.id)

      resOk(res, {
        examination: {
          diagnosis: booking.diagnosis ?? "",
          finalDiagnosis: booking.finalDiagnosis ?? "",
          notes: booking.notes ?? "",
          temperature: booking.temperature ?? "",
          pulse: booking.pulse ?? "",
          bloodPressure: booking.bloodPressure ?? "",
          respiratoryRate: booking.respiratoryRate ?? "",
          weight: booking.weight ?? "",
          height: booking.height ?? "",
          followUp: followUp ? true : false,
          followUpDate: followUp?.day ?? moment().format('YYYY-MM-DD'),
          followUpTime: followUp?.time ? followUp.time.slice(0, 5) : "",
          followUpNote: followUp?.reason ?? ""
        },
        fileStore: files
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async postExamination(req, res, next) {
    try {

      const id = Number(req.params.id);
      if (!id) return resOk(res, false, "ID không hợp lệ");

      const booking = await BookingSV.one(id);
      if (!booking) return resOk(res, false, "Không tìm thấy lịch hẹn");

      const ip = normalizeEmptyToNull(req.body);

      // Xử lý follow-up
      if (ip.followUp) {
        const validTime = /^([01]\d|2[0-3]):([0-5]\d)$/.test(ip.followUpTime);
        const validDate = /^\d{4}-\d{2}-\d{2}$/.test(ip.followUpDate);
        if (!validTime || !validDate) {
          return resOk(res, false, "Ngày hoặc giờ tái khám không hợp lệ");
        }

        const existFU = booking.followUpId && await BookingSV.one(booking.followUpId);
        const followUpData = {
          day: ip.followUpDate,
          time: ip.followUpTime,
          reason: ip.followUpNote,
        };

        if (existFU) {
          await BookingSV.edit(existFU.id, followUpData);
        } else {
          const schedule = await ScheduleSV.mainDId(booking.doctorId);
          const newFollowUp = await BookingSV.up({
            ...followUpData,
            doctorId: booking.doctorId,
            patientId: booking.patientId,
            bookingType: "followUp",
            status: "confirmed",
            duration: schedule.appointmentDuration,
            price: schedule.appointmentPrice,
          });
          await BookingSV.edit(id, { followUpId: newFollowUp.id });
        }
      } else if (booking.followUpId) {
        await BookingSV.edit(id, { followUpId: null });
        await BookingSV.down(booking.followUpId);
      }

      // Cập nhật thông tin khám
      await BookingSV.edit(id, {
        diagnosis: ip.diagnosis,
        finalDiagnosis: ip.finalDiagnosis,
        notes: ip.notes,
        temperature: ip.temperature,
        pulse: ip.pulse,
        bloodPressure: ip.bloodPressure,
        respiratoryRate: ip.respiratoryRate,
        weight: ip.weight,
        height: ip.height,
      });

      const updated = await BookingSV.one(id);
      const files = await BookingFileSV.allByBookingId(id);

      return resOk(res, {
        examination: {
          diagnosis: updated.diagnosis ?? "",
          finalDiagnosis: updated.finalDiagnosis ?? "",
          notes: updated.notes ?? "",
          temperature: updated.temperature ?? "",
          pulse: updated.pulse ?? "",
          bloodPressure: updated.bloodPressure ?? "",
          respiratoryRate: updated.respiratoryRate ?? "",
          weight: updated.weight ?? "",
          height: updated.height ?? "",
          followUp: !!updated.followUpId,
          followUpDate: ip.followUpDate ?? "",
          followUpTime: ip.followUpTime ?? "",
          followUpNote: ip.followUpNote ?? ""
        },
        fileStore: files
      });


    } catch (error) {
      console.error(error);
      return next(createError.InternalServerError("Lỗi hệ thống"));
    }
  }

  static async doctorSchedule(req, res, next) {
    try {

      const doctor = await DoctorSV.onByUId(req.user.id)
      if (!doctor) {
        resOk(res, [])
        return
      }

      const schedule = await ScheduleSV.mainDId(doctor.id)
      if (!schedule) {
        resOk(res, [])
        return
      }

      const bookings = await BookingSV.allByDidADate(doctor.id, req.params.date);
      const bookedTimes = bookings.map(i => {
        const [h, m, s] = i.time.split(':').map(Number);
        return {
          time: h * 60 + m,
          duration: i.duration
        }
      });
      const timeSlots = generateTimeSlots(schedule);
      const times = availableTimeSlot(timeSlots, bookedTimes)
      resOk(res, times.filter(i => i.available));
      // resOk(res, [])
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }

  }
  static async getPrescription(req, res, next) {
    try {

      const bookingId = Number(req.params.bookingId)
      if (!bookingId) return resOk(res, []);
      const booking = await BookingSV.one(Number(bookingId))
      if (!booking) return resOk(res, [])
      const prescriptionRS = (await BookingPrescriptionSV.allByBookingId(booking.id)).map(i => ({
        id: i.id,
        name: i.name ?? "",
        dosage: i.dosage ?? "",
        frequency: i.usage ?? "",
        duration: i.duration ? String(i.duration) : "",
        instructions: i.notes ?? ""
      }))
      return resOk(res, {
        prescriptions: prescriptionRS,
        generalInstructions: booking.generalInstructions ?? ""

      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }

  }
  static async postPrescription(req, res, next) {
    try {
      const bookingId = Number(req.params.bookingId)
      if (!bookingId) return resOk(res, []);
      const booking = await BookingSV.one(Number(bookingId))
      if (!booking) return resOk(res, [])
      const existingIds = (await BookingPrescriptionSV.allByBookingId(booking.id)).map(i => i.id)

      // b1: xóa thuốc 
      await BookingPrescriptionSV.down(existingIds.filter(e => !req.body.prescriptions.some(p => p.id === e)));

      // thêm mới thuốc
      for (const i of req.body.prescriptions) {
        if (i.id >= 0) continue
        await BookingPrescriptionSV.up({
          name: i.name,
          dosage: i.dosage,
          usage: i.frequency,
          duration: i.duration,
          notes: i.instructions,
          bookingId: booking.id
        });
      }
      // sửa thuốc
      for (const item of req.body.prescriptions.filter(p => (p.id > 0 && existingIds.includes(p.id)))) {
        await BookingPrescriptionSV.edit(item.id, {
          name: item.name,
          dosage: item.dosage,
          usage: item.frequency,
          duration: item.duration,
          notes: item.instructions
        });
      }
      const generalInstructions = await BookingSV.edit(booking.id, { generalInstructions: req.body.generalInstructions })
      const prescriptionsRS = (await BookingPrescriptionSV.allByBookingId(booking.id)).map(i => ({
        id: i.id,
        name: i.name ?? "",
        dosage: i.dosage ?? "",
        frequency: i.usage ?? "",
        duration: i.duration ? String(i.duration) : "",
        instructions: i.notes ?? ""
      }))
      return resOk(res, {
        prescriptions: prescriptionsRS,
        generalInstructions: req.body.generalInstructions

      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }

  }
  static async prescriptionInfo(req, res, next) {
    try {
      const bookingId = Number(req.params.bookingId)
      if (!bookingId) return resOk(res, []);
      const booking = await BookingSV.one(Number(bookingId))
      if (!booking) return resOk(res, [])
      const doctor = await DoctorSV.one(booking.doctorId)
      const patient = await PatientSV.one(booking.patientId)

      const prescriptionRS = (await BookingPrescriptionSV.allByBookingId(booking.id)).map(i => ({
        id: i.id,
        name: i.name ?? "",
        dosage: i.dosage ?? "",
        frequency: i.usage ?? "",
        duration: i.duration ?? "",
        instructions: i.notes ?? ""
      }))
      return resOk(res, {
        info: {
          patientName: patient.name,
          patientAge: calculateAge(patient.dob),
          patientGender: getVNGender(patient.gender),
          diagnosis: booking.finalDiagnosis,
          doctorName: doctor.name,
          doctorSpecialty: doctor.specialty?.name ?? "Bác sĩ đa khoa",
          doctorHospital: doctor.hospital?.name ?? "Bác sĩ tư nhân",
          generalInstructions: booking.generalInstructions ?? ""
        },
        prescriptions: prescriptionRS,

      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }

  }


  static async updateFiles(req, res, next) {
    try {
      const bookingId = Number(req.params.bookingId)
      if (!bookingId) return resOk(res, []);
      const booking = await BookingSV.one(Number(bookingId))
      if (!booking) return resOk(res, [])
      for (const file of req.customFiles) {
        await BookingFileSV.up({
          bookingId: bookingId,

          name: file.originalname,
          type: file.mimetype,
          url: `/${file.subPath}/${file.filename}`,
        })
      }
      console.log(req.customFiles)
      const rs = await BookingFileSV.allByBookingId(bookingId)
      resOk(res, rs)
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }

  }

  static async downFile(req, res, next) {
    try {
      const bookingId = Number(req.params.bookingId)
      const id = Number(req.params.id)
      if (!bookingId) return resOk(res, null);
      if (!id) return resOk(res, null);
      const booking = await BookingSV.one(Number(bookingId))
      if (!booking) return resOk(res, null)
      await BookingFileSV.down(id)
      const rs = BookingFileSV.allByBookingId(bookingId)
      resOk(res, rs)
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }

  }

  static async sendMailToPatient(req, res, next) {
    try {
      const bookingId = Number(req.params.bookingId)
      if (!bookingId) return resOk(res, null);
      const booking = await BookingSV.one(Number(bookingId))
      if (!booking) return resOk(res, null)
      const doctor = await DoctorSV.one(booking.doctorId)
      if (!doctor) return resOk(res, null)
      const patient = await PatientSV.one(booking.patientId)
      if (!patient) return resOk(res, null)

      const prescriptionRS = (await BookingPrescriptionSV.allByBookingId(booking.id)).map(i => ({
        id: i.id,
        name: i.name ?? "",
        dosage: i.dosage ?? "",
        frequency: i.usage ?? "",
        duration: i.duration ?? "",
        instructions: i.notes ?? ""
      }))
      const emailTo = patient.user.email ?? patient.email ?? null
      if (!emailTo) return resOk(res, null)
      sendPrescriptionDetailEmail(
        emailTo,
        {
          patientName: patient.name,
          patientAge: calculateAge(patient.dob),
          patientGender: getVNGender(patient.gender),
          diagnosis: booking.finalDiagnosis ?? "",
          generalInstructions: booking.generalInstructions ?? "",
          doctorName: doctor.name,
          doctorSpecialty: doctor.specialty?.name ?? "Bác sĩ đa khoa",
          doctorHospital: doctor.hospital?.name ?? "Bác sĩ tư nhân"
        },
        prescriptionRS
      );

      return resOk(res, true);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }

  }



}
module.exports = DoctorAppointment;
