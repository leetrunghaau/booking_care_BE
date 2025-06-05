const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const SpecialtiesSV = require("../services/specialties");

class DoctorHeper {
    static async getAllFAQ(req, res, next) {
        try {
            const doctor = await DoctorSV.onByUId(req.user.id)
            const specialty = doctor.specialtyId ? (await SpecialtiesSV.one(doctor.specialtyId)) : null

            resOk(res, {
                doctorId: String(doctor.id),
                doctorName: doctor.name,
                specialty: specialty ? specialty.name : "Bác sĩ chuyên khoa",
                img: doctor.img
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = DoctorFAQ;
