const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const HospitalSV = require("../services/hospital");
const { formatPhoneNumber } = require("../helpers/num");
const PatientSV = require("../services/patient");
const { getVNGender } = require("../helpers/text");
const moment = require("moment");

class AdminPatient {
 
  static async getPatinents(req, res, next) {
    try {
      let { page, search } = req.query
      page = page ? page - 1 : 0
      const data = await PatientSV.allInPage(page, search)
      const patients = data.data.map(i => ({
        id: i.id,
        name: i.name,
        code:i.code,
        gender: getVNGender(i.gender),
        dob: i.dob ? moment(i.dob).format("DD-MM-YYYY") :'-',
        email: i.user?.email ?? i.email ?? "không có thông tin",
        img: i.img,
        phone: formatPhoneNumber(i.phone),
        address: i.address ?? "không có thông tin"
      }))
      resOk(res, {
        patients: patients,
        page: page + 1,
        totalPages: Math.ceil(data.total / 5),
        total: data.total,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
 
}
module.exports = AdminPatient;
