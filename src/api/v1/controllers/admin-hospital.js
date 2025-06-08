const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const HospitalSV = require("../services/hospital");
const { formatPhoneNumber } = require("../helpers/num");
const HospitalTimeSV = require("../services/hospital-times");
const HospitalServiceSV = require("../services/hospital-services");
const HospitalSpecialty = require("../models/hospital-specialties");
const HospitalSpecialtySV = require("../services/hospital-specialties");
const DoctorSV = require("../services/doctor");

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


  static async getBasic(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);

      const hospital = await HospitalSV.one(id);  
      if (!hospital) return resOk(res, null);
      const times = (await HospitalTimeSV.hospital(hospital.id)).map(time => ({
        dayOfWeek: time.dayOfWeek,
        startTime: time.startTime,
        endTime: time.endTime
      }));
      
      resOk(res, {
        id: hospital.id,
        name: hospital.name,
        about: hospital.about,
        address: hospital.address,
        phone: formatPhoneNumber(hospital.phone),
        license: hospital.license,
        image: hospital.thumbnail,
        year: hospital.year,
        mapEmbedUrl: hospital.mapEmbedUrl,
        times: times
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async editBasic(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const input = req.body;
      const hospital = await HospitalSV.one(id);
      if (!hospital) return resOk(res, null);
      hospital.name = input.name;
      hospital.about = input.description;
      hospital.address = input.address;
      hospital.phone = input.phone;
      hospital.license = input.license;
      hospital.year = input.year;
      hospital.mapEmbedUrl = input.mapEmbedUrl;
      await hospital.save();
      const existingTimes = await HospitalTimeSV.hospital(hospital.id);
      const existingTimeIds = existingTimes.map(time => time.id); 
      const newTimes = input.openingHours.filter(time => !existingTimeIds.includes(time.id));
      const timesToDelete = existingTimes.filter(time => !input.openingHours.some(t => t.id === time.id));
      for (const time of timesToDelete) {
        await HospitalTimeSV.down(time.id);
      }
      for (const time of newTimes) {
        await HospitalTimeSV.up({ ...time, hospitalId: hospital.id });
      }
      const times = (await HospitalTimeSV.hospital(hospital.id)).map(time => ({
        dayOfWeek: time.dayOfWeek,
        startTime: time.startTime,
        endTime: time.endTime
      }));

      resOk(res, {
        id: hospital.id,
        name: hospital.name,
        about: hospital.about,
        address: hospital.address,
        phone: formatPhoneNumber(hospital.phone),
        license: hospital.license,
        image: hospital.thumbnail,
        year: hospital.year,
        mapEmbedUrl: hospital.mapEmbedUrl,
        times: times
        }
      );
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async upimage(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const hospital = await HospitalSV.one(id);
      if (!hospital) return resOk(res, null);
      if (!req.customFile) return resOk(res, false);
      hospital.thumbnail = req.customFile.fullPath;
      await hospital.save();

      resOk(res, {
        id: hospital.id,
        image: hospital.thumbnail,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getSpecialtiesAndServices(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const hospital = await HospitalSV.one(id);
      if (!hospital) return resOk(res, null);
      const specialties = await HospitalSV.specialties(hospital.id);
      const spcialtyRS = specialties.map(s => ({
        id: s.id,
        name: s.name,
        icon: s.icon,
        slug: s.slug,
        title: s.title,
        about: s.about,

      }));
      const services = await HospitalServiceSV.hospital(hospital.id);
      const serviceRS = services.map(s => ({
        id: s.id,
        name: s.serviceName
      }));
      resOk(res, {
        id: hospital.id,
        name: hospital.name,
        specialties: spcialtyRS,
        services: serviceRS
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async editSpecialtiesAndServices(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const input = req.body; 
      // body = {
      //   specialties: [1,4,5], // id của chuyên khoa
      //   services: [{id: 1, name: "Xét nghiệm máu"}, {id: 2, name: "Siêu âm"}] // id <0 || id : null sẽ là thêm mới, id > 0 sẽ là cập nhật
      // }
      const hospital = await HospitalSV.one(id);
      if (!hospital) return resOk(res, null);
      // Xử lý chuyên khoa
      // id chuyên khoa đã có trong bệnh viện
      const oldSptIds = (await HospitalSpecialtySV.specialties(hospital.id)).map(s => s.specialtyId);
      // lọc ra chuyên khoa mới chưa có trong bệnh viện


      //thêm mới
      const upSptIds = input.specialties.filter(s => !oldSptIds.includes(s));
      for (const upSptId of upSptIds) {
        await HospitalSpecialtySV.up({ hospitalId: hospital.id, specialtyId: upSptId });
      }
      //xóa
      const dowSptIds = oldSptIds.filter(s => !input.specialties.includes(s));
      for (const dowSptId of dowSptIds) {
        await HospitalSpecialtySV.down(hospital.id, dowSptId);
      }

      // Xử lý dịch vụ
      // Lấy danh sách dịch vụ hiện tại của bệnh viện
      const oldSVIds = (await HospitalServiceSV.hospital(hospital.id)).map(s => s.id);

      // thêm mới dịch vụ
      const upSVs = input.services.filter(s => (!s.id || s.id < 0) );
      for (const upSV of upSVs) {
        await HospitalServiceSV.up({ hospitalId: hospital.id, serviceName: upSV.name });
      }
      
      // cập nhật dịch vụ
      const editSVs = input.services.filter(s => oldSVIds.includes(s.id) );
      for (const editSV of editSVs) {
        await HospitalServiceSV.edit(editSV.id, { serviceName: editSV.name });
      }
      // xóa dịch vụ
      const dowSVIds = oldSVIds.filter(s => !input.services.some(i => i.id === s));
      for (const dowSVId of dowSVIds) {
        await HospitalServiceSV.down(dowSVId);
      }
      resOk(res, true);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getDoctorsNoHospital(req, res, next) {
    try {
      const doctors = (await DoctorSV.allNoHospital()).map(i => ({
        id: i.id,
        slug: i.slug,
        name: i.name,
        code: i.code,
        email: i.user?.email ?? i.email ?? "không có thông tin",
        img: i.img,
        phone: formatPhoneNumber(i.phone),
        specialty: i.specialty?.name ?? "Không có thông tin",
        specialtyIcon: i.specialty?.icon ?? "",
      }));
      resOk(res, doctors);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }


}
module.exports = AdminHospital;
