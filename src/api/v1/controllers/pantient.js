const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
class Pantient {
    static async all(req, res, next) {
        try {
            
            resOk(res, null);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async oneBySlug(req, res, next) {
        try {
           
            resOk(res, null);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Pantient;
