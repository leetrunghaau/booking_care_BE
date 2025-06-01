const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const HomeSV = require('../services/home');
const DoctorSV = require('../services/doctor');
const SpecialtiesSV = require('../services/specialties');
class Home {
    static async doctors(req, res, next) {
        try {
            const doctors = await DoctorSV.all()
            const topDoctors = doctors
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4).map(i => {
                    return {
                        id: i.id,
                        slug: i.slug,
                        name: i.name,
                        img: i.img,
                        specialty: i.specialty?.name ?? "Bác sĩ tổng hợp",
                        rating: i.rating,
                        reviews: i.reviews
                    }
                })
            resOk(res, topDoctors);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async specialties(req, res, next) {
        try {


            const specialties = await SpecialtiesSV.all()
            const topSpecialties = specialties.slice(0, 6).map(i => {
                return {
                    id: i.id,
                    slug: i.slug,
                    name: i.name,
                    icon: i.img,
                   
                }
            })
            resOk(res, topSpecialties);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Home;
