const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const SpecialtiesSV = require("../services/specialties");
class Specialties {
  static async all(req, res, next) {
    try {
      const specialties = await SpecialtiesSV.all();
      console.log(specialties);

      resOk(res, specialties);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async oneBySlug(req, res, next) {
    try {
      console.log("poind 1");
      const specialty = await SpecialtiesSV.oneBySlug(req.params.slug);
      if (!specialty) {
        console.log("nulll");
        resOk(res, null);
        return;
      }
      const doctors = await SpecialtiesSV.doctors(specialty.id);
      const hospitalIds = await SpecialtiesSV.hospitalIds(specialty.id);
      const ids = hospitalIds.map((i) => i.id);
      const hospitals = await SpecialtiesSV.hospitals(ids);
      const rs = {
        specialty: specialty,
        hospitals: hospitals,
        doctors: doctors,
      };

      // nối kết quả
      console.log(doctors);
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = Specialties;
