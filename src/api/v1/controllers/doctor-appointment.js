const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const BookingSV = require("../services/Booking");
const DoctorSV = require("../services/doctor");
const { DATEONLY } = require("sequelize");
const PatientSV = require("../services/patient");

class DoctorAppointment {
  static async getAllAppointments(req, res, next) {
    try {
      const rs = [
        {
          id: "1",
          patientName: "Nguyễn Văn A",
          patientPhone: "0987654321",
          date: "2025-05-22T09:00:00.000Z", // Today
          time: "09:00",
          duration: 30,
          price: 300000,
          status: "confirmed",
          symptoms: "Đau đầu, sốt nhẹ, mệt mỏi kéo dài 2 ngày",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "2",
          patientName: "Trần Thị B",
          patientPhone: "0912345678",
          date: "2025-05-22T10:30:00.000Z", // Today
          time: "10:30",
          duration: 45,
          price: 450000,
          status: "pending",
          symptoms: "Đau bụng, buồn nôn",
          isOnline: true,
        },
        {
          id: "3",
          patientName: "Lê Văn C",
          patientAvatar: "/placeholder.svg?height=48&width=48&text=LVC",
          patientPhone: "0909123456",
          date: "2025-05-24T14:00:00.000Z", // 2 days in the future
          time: "14:00",
          duration: 30,
          price: 300000,
          status: "confirmed",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "4",
          patientName: "Phạm Thị D",
          patientPhone: "0978123456",
          date: "2025-05-19T15:30:00.000Z", // 3 days in the past
          time: "15:30",
          duration: 60,
          price: 500000,
          status: "completed",
          symptoms: "Khám sức khỏe định kỳ",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "5",
          patientName: "Hoàng Văn E",
          patientPhone: "0918765432",
          date: "2025-05-21T08:00:00.000Z", // Yesterday
          time: "08:00",
          duration: 30,
          price: 300000,
          status: "cancelled",
          symptoms: "Ho, sốt cao",
          isOnline: true,
        },
        {
          id: "6",
          patientName: "Vũ Thị F",
          patientPhone: "0965432109",
          date: "2025-05-27T11:00:00.000Z", // 5 days in the future
          time: "11:00",
          duration: 45,
          price: 450000,
          status: "confirmed",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "7",
          patientName: "Ngô Văn G",
          patientPhone: "0934567890",
          date: "2025-05-17T16:00:00.000Z", // 5 days in the past
          time: "16:00",
          duration: 60,
          price: 600000,
          status: "pending",
          symptoms: "Đau họng, khó thở",
          address: "Phòng khám số 5, Tầng 1, Tòa nhà Z",
        },
        {
          id: "8",
          patientName: "Phạm Thị H",
          patientPhone: "0923456789",
          date: "2025-05-15T10:00:00.000Z", // 7 days in the past
          time: "10:00",
          duration: 30,
          price: 300000,
          status: "completed",
          symptoms: "Khám sức khỏe định kỳ",
          isOnline: true,
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getAppointmentById(req, res, next) {
    try {
      const { id } = req.params;


      const booking = await BookingSV.oneById(Number(id))
      if (!booking) return resOk(res, null, "không có bệnh nhân")
      const patient = await PatientSV.oneId(booking.patientId)
      const doctor = await DoctorSV.one(booking.doctorId)
      const bookingHistoryDB = await BookingSV.historyPatient(patient.id)
      const bookingHistory = bookingHistoryDB.map(item => {
        return {
          date: item.bookingDate,
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
        date: booking.bookingDate,
        time: booking.bookingTime,
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
      const rs = await BookingSV.allByDoctorADay(doctor.id, toDay);
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

}
module.exports = DoctorAppointment;
