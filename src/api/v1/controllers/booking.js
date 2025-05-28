const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const SpecialtiesSV = require('../services/specialties');
const HospitalSV = require('../services/hospital');
const DoctorSV = require('../services/doctor');
class Booking {

    static async specialties(req, res, next) {
        try {
            const specialties = await SpecialtiesSV.all()

            const allDiseaseNames = specialties.flatMap(specialty =>
                specialty.commonDiseases.map(disease => disease.name)
            );

            resOk(res, {
                specialties: specialties,
                symptoms: allDiseaseNames
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async hospitals(req, res, next) {
        try {
            const rs = await HospitalSV.all();
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctors(req, res, next) {
        try {
            const doctors = await DoctorSV.all();
            resOk(res, doctors);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async one(req, res, next) {
        try {

            const rs = {
                id: 1,
                name: "Bác sĩ Nguyễn Văn A",
                specialty: "Răng hàm mặt",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                location: "Hồ Chí Minh",
                room: "Phòng 101"
            }

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctorSchedule(req, res, next) {
        try {
            const rs = [
                { time: 480, available: true },   // 08:00
                { time: 510, available: false },  // 08:30
                { time: 540, available: true },   // 09:00
                { time: 570, available: true },   // 09:30
                { time: 600, available: false },  // 10:00
                { time: 630, available: true },   // 10:30
                { time: 660, available: true },   // 11:00
                { time: 690, available: false },  // 11:30
                { time: 720, available: true },   // 12:00
                { time: 750, available: false }   // 12:30
            ];
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = Booking;
