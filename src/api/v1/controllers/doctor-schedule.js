const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const ScheduleSV = require("../services/schedule");
const { getActiveDays, getBinaryFromActiveDays } = require("../helpers/dayly");
const { formatVND, formatPhoneNumber } = require("../helpers/num");
const moment = require("moment");
const BookingSV = require("../services/Booking");
const { generateTimeSlots } = require("../helpers/time");
const TimeSlotSV = require("../services/time-slot");
require('moment/locale/vi');
moment.locale('vi');

class DoctorSchedule {
  static async getScheduleByDay(req, res, next) {
    try {

      const doctor = await DoctorSV.onByUId(req.user.id)
      if (!doctor) return resOk(res, []);
      const schedule = await ScheduleSV.mainDId(doctor.id)
      if (!schedule) return resOk(res, []);
      const bookedSlot = (await BookingSV.allByDidADate(doctor.id, req.params.date)).filter(i => (i.status == "pending" || i.status == "confirmed")).map(i => {
        const [h, m] = i.time.split(':').map(Number);
        return {
          id: i.id,
          start: h * 60 + m,
          end: (h * 60 + m) + (i.duration || schedule.appointmentDuration || 30),
          patient: i.patient ? i.patient.name : null,
        };
      });

      const busySlots = (await TimeSlotSV.allByDIdAndDate(doctor.id, req.params.date)).map(i => {
        const [h, m] = i.time.split(':').map(Number);
        return {
          id: i.id,
          start: h * 60 + m,
          end: (h * 60 + m) + (i.duration || schedule.appointmentDuration || 30),
        };
      });
      const now = moment()
      const currTime = now.format('YYYY-MM-DD') != req.params.date ? -1 : now.hour() * 60 + now.minute() - 30
      const timeSlots = generateTimeSlots(schedule).map(slot => {
        const matchedBookedSlot = bookedSlot.find(time => time.start < slot.endNum && time.end > slot.startNum);
        const matchedBusySlot = busySlots.find(time => time.start < slot.endNum && time.end > slot.startNum);
        const isBooked = !!matchedBookedSlot;
        const isBusy = !!matchedBusySlot;
        return {
          ...slot,
          available: !isBusy,
          availableId: matchedBusySlot ? matchedBusySlot.id : null,
          bookedId: matchedBookedSlot ? matchedBookedSlot.id : null,
          patient: matchedBookedSlot ? matchedBookedSlot.patient : null,
          booked: isBooked,
        };
      })
      resOk(res, timeSlots);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getWorkingDays(req, res, next) {
    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, []);
      const rs = await ScheduleSV.mainDId(doctor.id);
      if (!rs) return resOk(res, []);
      resOk(res, getActiveDays(rs.workingDays));
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async toggleTimeSlots(req, res, next) {
    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, null);
      const { date, time, toggleOff } = req.body;
      if (!date || !time) return resOk(res, null);
      if (toggleOff) {
        await TimeSlotSV.down(toggleOff);
      } else {
        const schedule = await ScheduleSV.mainDId(doctor.id);
        if (!schedule) return resOk(res, null);
        await TimeSlotSV.up({
          doctorId: doctor.id,
          date: date,
          time: time,
          duration: schedule.appointmentDuration || 30,
        });
      }

      resOk(res, true);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getBookingById(req, res, next) {
    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, null);
      const booking = await BookingSV.one(req.params.id);
      if (!booking) return resOk(res, null);
      console.log(booking);
      resOk(res, {
        appointmentDate: moment(booking.day, "YYYY-MM-DD").format("[ngày] DD, [tháng] MM, [năm] YYYY"),
        appointmentTime: moment(booking.time, "HH:mm:ss").format("HH:mm"),
        status: booking.status,
        reason: booking.reason ?? "",
        notes: booking.notes ?? "",
        patient: {
          name: booking.patient?.name ?? "",
          gender: booking.patient?.gender ?? "Khác",
          dateOfBirth: moment(booking.patient?.dob).format("DD-MM-YYYY"),
          phone: formatPhoneNumber(booking.patient?.phone),
          email: booking.patient?.email,
          address: booking.patient?.address ?? "",
          medicalHistory: booking.patient?.medicalHistory,
        },
        doctor: {
          name: booking.doctor?.name ?? "",
          phone: formatPhoneNumber(booking.doctor?.phone),
          email: booking.doctor?.email,
          specialization: booking.doctor?.specialty?.name ?? "",
        },
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async info(req, res, next) {
    try {
      const doctor = await DoctorSV.onByUId(req.user.id)
      if (!doctor) return resOk(res, null)
      const rs = await ScheduleSV.mainDId(doctor.id)
      if (!rs) return resOk(res, null)

      resOk(res, {
        workingDays: getActiveDays(rs.workingDays),
        defaultDuration: rs.appointmentDuration ? `${rs.appointmentDuration} phút` : null,
        defaultPrice: formatVND(rs.appointmentPrice),
        workingHours: {
          start: moment(rs.startTime, "HH:mm:ss").format("HH:mm"),
          end: moment(rs.endTime, "HH:mm:ss").format("HH:mm"),
        },
        breakTime: {
          enabled: rs.hasLunchBreak,
          start: moment(rs.lunchStart, "HH:mm:ss").format("HH:mm"),
          end: moment(rs.lunchEnd, "HH:mm:ss").format("HH:mm"),
        },
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getScheduleSettings(req, res, next) {

    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, null);
      const schedule = await ScheduleSV.mainDId(doctor.id);
      if (!schedule) return resOk(res, null);
      const template = await ScheduleSV.template(doctor.id);
      resOk(res, {
        id: schedule.id,
        workingDays: getActiveDays(schedule.workingDays),
        appointmentDuration: schedule.appointmentDuration || 30,
        appointmentPrice: schedule.appointmentPrice || 0,
        startTime: moment(schedule.startTime, "HH:mm:ss").format("HH:mm"),
        endTime: moment(schedule.endTime, "HH:mm:ss").format("HH:mm"),
        hasLunchBreak: schedule.hasLunchBreak,
        notes: schedule.notes || "",
        lunchStart: schedule.lunchStart ? moment(schedule.lunchStart, "HH:mm:ss").format("HH:mm") : "",
        lunchEnd: schedule.lunchEnd ? moment(schedule.lunchEnd, "HH:mm:ss").format("HH:mm") : "",
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getTemplates(req, res, next) {

    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, null);
      const template = await ScheduleSV.template(doctor.id);
      resOk(res, template.map(i => {
        const workingDays = getActiveDays(i.workingDays);
        let description = `Làm việc ${workingDays.length} ngày/tuần từ ${moment(i.startTime, "HH:mm:ss").format("HH:mm")} - ${moment(i.endTime, "HH:mm:ss").format("HH:mm")}`;
        if (i.hasLunchBreak) {
          description += `, nghỉ trưa ${moment(i.lunchStart, "HH:mm:ss").format("HH:mm")} - ${moment(i.lunchEnd, "HH:mm:ss").format("HH:mm")}`;
        }
        return {
          id: i.id,
          title: i.notes || "Lịch làm việc mẫu",
          description: description,
        };
      }));

    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async applyTemplates(req, res, next) {

    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, null);
      const { id } = req.body;
      if (!id || isNaN(Number(id))) return resOk(res, null);
      const activeTemplate = await ScheduleSV.one(id);
      if (!activeTemplate) return resOk(res, null);

      const existingSchedule = await ScheduleSV.mainDId(doctor.id);
      if (existingSchedule) {
        await ScheduleSV.edit(existingSchedule.id, { isDefault: false });
      }
      const newMainSchedule = await ScheduleSV.edit(activeTemplate.id, {
        isDefault: true,
      });
      const templateRS = (await ScheduleSV.template(doctor.id)).map(i => {
        const workingDays = getActiveDays(i.workingDays);
        let description = `Làm việc ${workingDays.length} ngày/tuần từ ${moment(i.startTime, "HH:mm:ss").format("HH:mm")} - ${moment(i.endTime, "HH:mm:ss").format("HH:mm")}`;
        if (i.hasLunchBreak) {
          description += `, nghỉ trưa ${moment(i.lunchStart, "HH:mm:ss").format("HH:mm")} - ${moment(i.lunchEnd, "HH:mm:ss").format("HH:mm")}`;
        }
        return {
          id: i.id,
          title: i.notes || "Lịch làm việc mẫu",
          description: description,
        };
      });
      const scheduleRS = await ScheduleSV.mainDId(doctor.id);
      resOk(res, {
        mainSchedule: scheduleRS ? {
          id: scheduleRS.id,
          workingDays: getActiveDays(scheduleRS.workingDays),
          appointmentDuration: scheduleRS.appointmentDuration || 30,
          appointmentPrice: scheduleRS.appointmentPrice || 0,
          startTime: moment(scheduleRS.startTime, "HH:mm:ss").format("HH:mm"),
          endTime: moment(scheduleRS.endTime, "HH:mm:ss").format("HH:mm"),
          hasLunchBreak: scheduleRS.hasLunchBreak,
          notes: scheduleRS.notes || "",
          lunchStart: scheduleRS.lunchStart ? moment(scheduleRS.lunchStart, "HH:mm:ss").format("HH:mm") : "",
          lunchEnd: scheduleRS.lunchEnd ? moment(scheduleRS.lunchEnd, "HH:mm:ss").format("HH:mm") : "",
        } : null,
        templates: templateRS,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async updateScheduleSettings(req, res, next) {
    try {
      const doctor = await DoctorSV.onByUId(req.user.id);
      if (!doctor) return resOk(res, null);

      const input = req.body;

      const parseTime = (time) =>
        time ? moment(time, "HH:mm").format("HH:mm:ss") : null;

      const scheduleData = {
        doctorId: doctor.id,
        workingDays: getBinaryFromActiveDays(input.workingDays),
        startTime: parseTime(input.startTime),
        endTime: parseTime(input.endTime),
        appointmentDuration: input.appointmentDuration || 30,
        appointmentPrice: input.appointmentPrice,
        hasLunchBreak: !!input.hasLunchBreak,
        lunchStart: parseTime(input.lunchStart),
        lunchEnd: parseTime(input.lunchEnd),
        notes: input.notes || "",
      };

      if (input.id) {
        await ScheduleSV.edit(input.id, { id: input.id, ...scheduleData });
      } else {
        const existingSchedule = await ScheduleSV.mainDId(doctor.id);
        if (existingSchedule) {
          await ScheduleSV.edit(existingSchedule.id, { isDefault: false });
        }

        const newSchedule = await ScheduleSV.up({
          ...scheduleData,
          isDefault: true,
        });
        input.id = newSchedule.id;
      }

      const schedule = await ScheduleSV.mainDId(doctor.id);
      if (!schedule) return resOk(res, null);

      const formatTime = (time) =>
        time ? moment(time, "HH:mm:ss").format("HH:mm") : null;

      resOk(res, {
        id: schedule.id,
        workingDays: getActiveDays(schedule.workingDays),
        appointmentDuration: schedule.appointmentDuration || 30,
        appointmentPrice: schedule.appointmentPrice,
        startTime: formatTime(schedule.startTime),
        endTime: formatTime(schedule.endTime),
        hasLunchBreak: schedule.hasLunchBreak,
        lunchStart: formatTime(schedule.lunchStart),
        lunchEnd: formatTime(schedule.lunchEnd),
        notes: schedule.notes || "",
      });
    } catch (error) {
      console.error(error);
      return next(createError.InternalServerError());
    }
  }

}
module.exports = DoctorSchedule;
