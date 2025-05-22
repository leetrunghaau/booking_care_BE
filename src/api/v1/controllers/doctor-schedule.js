const createError = require("http-errors");
const { resOk } = require("../helpers/utils");

class DoctorSchedule {
  static async getScheduleByDay(req, res, next) {
    try {
      const rs = [
        { time: "08:00", available: true, booked: false },
        {
          time: "08:30",
          available: true,
          booked: true,
          patient: "Nguyễn Văn X",
        },
        { time: "09:00", available: true, booked: false },
        { time: "09:30", available: false, booked: false },
        { time: "10:00", available: true, booked: false },
        { time: "10:30", available: true, booked: true, patient: "Trần Thị Y" },
        { time: "11:00", available: false, booked: false },
        { time: "11:30", available: false, booked: false },
        { time: "13:30", available: true, booked: false },
        { time: "14:00", available: true, booked: false },
        { time: "14:30", available: true, booked: true, patient: "Lê Văn Z" },
        { time: "15:00", available: true, booked: false },
        { time: "15:30", available: false, booked: false },
        { time: "16:00", available: true, booked: false },
        { time: "16:30", available: true, booked: false },
        { time: "17:00", available: true, booked: false },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = DoctorSchedule;
