const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const BookingSV = require("../services/Booking");

class DoctorDashboard {
    static async sumBooking(req, res, next) {
        try {
            // 'pending', 'confirmed', 'completed', 'cancelled'
            const toDay = new Date().toISOString().split('T')[0];
            const doctor = await DoctorSV.onByUId(req.user.id)
            const total = await BookingSV.countDoctor(doctor.id);
            const upcoming = await BookingSV.allByDoctorADay(doctor.id, toDay);
            const complete = await BookingSV.countDoctor(doctor.id, "completed");
            const cancel = await BookingSV.countDoctor(doctor.id, "cancelled");
            resOk(res, {
                total: total,
                upcoming: upcoming.length,
                complete: complete,
                cancel: cancel
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = DoctorDashboard;
