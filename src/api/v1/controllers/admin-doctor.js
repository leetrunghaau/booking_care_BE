const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const HospitalSV = require("../services/hospital");
const SpecialtiesSV = require("../services/specialties");
const { formatPhoneNumber } = require("../helpers/num");
const UserSV = require("../services/user");

class AdminDoctors {

  static async getDoctors(req, res, next) {
    try {
      let { page, hospital, specialty, search } = req.query
      page = page ? page - 1 : 0
      const data = await DoctorSV.allInPage(page, search, hospital, specialty)
      const doctors = data.data.map(i => ({
        id: i.id,
        slug: i.slug,
        name: i.name,
        code: i.code,
        email: i.user?.email ?? i.email ?? "không có thông tin",
        img: i.img,
        phone: formatPhoneNumber(i.phone),
        specialty: i.specialty?.name ?? "Không có thông tin",
        specialtyIcon: i.specialty?.icon ?? "",
        hospital: i.hospital?.name ?? "không có thông tin"
      }))
      resOk(res, {
        doctos: doctors,
        page: page + 1,
        totalPages: Math.ceil(data.total / 5),
        total: data.total,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getBase(req, res, next) {
    try {
      const hospitals = await HospitalSV.all()
      const specialties = await SpecialtiesSV.all()

      resOk(res, {
        hospitals: hospitals,
        specialties: specialties,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async upDoctor(req, res, next) {
    try {
      const input = req.body;

      const checkMail = await UserSV.oneEmail(input.email)
      if(checkMail) return resOk(res, {status: false, mess:"Email đã tồn tại trên hệ thống"})
      const doctor = await DoctorSV.up({
        name: input.name,
        phone: input.phone,
        email: input.email,
        dob: input.dob,
        gender: input.gender,
        about: input.about,
      });
      if (!doctor || !doctor.id) return resOk(res, null);
      const slugName = doctor.name?.toLowerCase().trim().replace(/\s+/g, '-');
      const paddedId = doctor.id.toString().padStart(6, '0');
      const slug = `${slugName}-${paddedId}`;
      const code = `BS-${paddedId}`;
      await DoctorSV.edit(doctor.id, {
        slug: slug,
        code: code,
      });
      resOk(res, {status: true, doctor:"Email đã tồn tại trên hệ thống"});
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async upAvata(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const doctor = await DoctorSV.one(id)
      if (!doctor) return resOk(res, null)
      const tem = await DoctorSV.edit(doctor.id, { img: `/${req.customFile.subPath}/${req.customFile.filename}` })
      resOk(res, { 
        img: `/${req.customFile.subPath}/${req.customFile.filename}`,
        name : doctor.name
       });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async downDoctor(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);

      const doctor = await DoctorSV.one(id)
      if (!doctor) return resOk(res, true);

      if (doctor.userId) {
        await UserSV.down(doctor.userId);
      }
      await DoctorSV.down(id);
      resOk(res, true);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

}
module.exports = AdminDoctors;
