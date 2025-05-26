const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const HomeSV = require('../services/home');
class Home {
    static async doctors(req, res, next) {
        try {
            const doctor = await HomeSV.doctors()
            
            resOk(res, doctor);
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
