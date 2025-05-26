const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const HospitalSV = require('../services/hospital');
class HospitalCo {
    static async all(req, res, next) {
        try {
            const rs = await HospitalSV.all()
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctorsById(req, res, next) {
        try {

            console.log("bác sĩ ở bệnh viện", rs)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async specialtiesById(req, res, next) {
        try {

            console.log("các khoa bệnh viện", rs)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async oneBySlug(req, res, next) {
        try {
            const hospital = await HospitalSV.onBySlug(req.params.slug)
            if (!hospital) {
                resOk(res, null)
            }
            const doctors = await HospitalSV.doctorsById(hospital.id)
            const specialties = await HospitalSV.specialtiesById(hospital.id)
            resOk(res, {hospital: hospital, doctors: doctors, specialties: specialties});
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = HospitalCo;
