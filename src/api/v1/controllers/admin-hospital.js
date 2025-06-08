const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const HospitalSV = require("../services/hospital");
const { formatPhoneNumber } = require("../helpers/num");
const HospitalTimeSV = require("../services/hospital-times");

class AdminHospital {

  static async getHospitals(req, res, next) {
    try {
      let { page, search } = req.query
      page = page ? page - 1 : 0
      const data = await HospitalSV.allInPage(page, search)
      const hospitals = data.data.map(i => ({
        id: i.id,
        name: i.name,
        slug: i.slug,
        img: i.thumbnail,
        phone: formatPhoneNumber(i.phone),
        address: i.address
      }))
      resOk(res, {
        hospitals: hospitals,
        page: page + 1,
        totalPages: Math.ceil(data.total / 5),
        total: data.total,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async upHospital(req, res, next) {
    try {
      const input = req.body
      const hospital = await HospitalSV.up({
        name: input.name,
        about: input.description,
        address: input.address,
        phone: input.phone,
        license: input.license,
      })
      if (!hospital) return resOk(res, null)

      for (const time of input.openingHours) {
        await HospitalTimeSV.up({ ...time, hospitalId: hospital.id })
      }
      resOk(res, true);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async downHospital(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const rs = HospitalSV.down(id)
      resOk(res, true);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

}
module.exports = AdminHospital;
