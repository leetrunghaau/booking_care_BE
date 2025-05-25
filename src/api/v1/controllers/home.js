const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const HomeSV = require('../services/home');
class Home {
    static async doctors(req, res, next) {
        try {
            const doctor = await HomeSV.doctors()
            const rs = doctor.map(item => {
                const i = {
                    id: item.id,
                    img: item.img,
                    slug: item.slug,
                    rating: item.rating,
                    sumRating: item.sumRating,
                    specialty: item.specialty?.name ??"",
                    name: item.user?.name ?? "",
                }
                return i
            })
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async specialties(req, res, next) {
        try {


            const specialties = await HomeSV.specialties()
            resOk(res, specialties);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Home;
