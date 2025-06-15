const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const HomeSV = require('../services/home');
const DoctorSV = require('../services/doctor');
const SpecialtiesSV = require('../services/specialties');
const moment = require("moment");
const MedicineDetailsSV = require('../services/medicine-details');
require('moment/locale/vi');
moment.locale('vi');
class MedicineDetails {
    static async search(req, res, next) {
        try {

            let { page, search } = req.query
            page = page ? page - 1 : 0
            const data = await MedicineDetailsSV.search(page, search)
           
            resOk(res, {
                data: data.data,
                page: page + 1,
                totalPages: Math.ceil(data.total / 10),
                total: data.total,
            });
           
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = MedicineDetails;
