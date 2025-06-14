const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const HospitalSV = require("../services/hospital");
const { formatPhoneNumber } = require("../helpers/num");
const HospitalTimeSV = require("../services/hospital-times");
const HospitalServiceSV = require("../services/hospital-services");
const HospitalSpecialty = require("../models/hospital-specialties");
const HospitalSpecialtySV = require("../services/hospital-specialties");
const DoctorSV = require("../services/doctor");
const moment = require("moment");
const { deleteFile } = require("../helpers/files");
const HospitalImageSV = require("../services/hospital-images");
const SpecialtiesSV = require("../services/specialties");
require('moment/locale/vi');
moment.locale('vi');

class AdminHospital {

  static async getHospitals(req, res, next) {
    try {
      let { page, search } = req.query
      page = page ? page - 1 : 0
      const data = await HospitalSV.allInPage(page, 5, search)
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
      if (!id) return resOk(res, null);

      const hospital = await HospitalSV.one(id);
      if (!hospital) return resOk(res, null);
      const times = (await HospitalTimeSV.hospital(hospital.id)).map(i => ({
        id: i.id,
        dayOfWeek: i.weekend,
        startTime: i.timeStart,
        endTime: i.timeEnd
      }))

      resOk(res, {
        id: hospital.id,
        name: hospital.name,
        about: hospital.about,
        address: hospital.address,
        phone: formatPhoneNumber(hospital.phone),
        license: hospital.license,
        image: hospital.thumbnail,
        year: hospital.years,
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

      await HospitalSV.edit(hospital.id, {
        name: input.name,
        about: input.about,
        address: input.address,
        phone: input.phone,
        license: input.license,
        years: input.year ?? 0,
        mapEmbedUrl: input.mapEmbedUrl,
      })

      if (!input.image) {
        deleteFile(hospital.thumbnail)
        await HospitalSV.edit(hospital.id, { thumbnail: null })
      }

      const existingTimes = await HospitalTimeSV.hospital(hospital.id);
      const existingTimeIds = existingTimes.map(time => time.id);
      const newTimes = input.times.filter(time => !existingTimeIds.includes(time.id));
      const timesToDelete = existingTimes.filter(time => !input.times.some(t => t.id === time.id));
      for (const time of timesToDelete) {
        await HospitalTimeSV.down(time.id);
      }
      await HospitalTimeSV.ups(newTimes.map((i) => ({
        hospitalId: hospital.id,
        weekend: i.dayOfWeek,
        timeStart: i.startTime,
        timeEnd: i.endTime
      })));
      const times = await HospitalTimeSV.hospital(hospital.id)

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
      if (!id) return resOk(res, null);
      const hospital = await HospitalSV.one(id);
      if (!hospital) return resOk(res, null);
      if (!req.customFile) return resOk(res, false);
      hospital.thumbnail = `/${req.customFile.subPath}/${req.customFile.filename}`;
      await hospital.save();

      resOk(res, hospital.thumbnail);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getDoctorBase(req, res, next) {
    try {

      const id = Number(req.params.id)
      if (!id) return resOk(res, null);
      const hospital = await HospitalSV.one(id);
      if (!hospital) return resOk(res, null);
      const specialties = await SpecialtiesSV.all()
      const doctorIds = (await DoctorSV.allHospital(hospital.id)).map(i => i.id)

      resOk(res, {
        doctor: doctorIds,
        specialties: specialties,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getDoctorsNoHospital(req, res, next) {

    const id = Number(req.params.id)
    if (!id) return resOk(res, null);
    const hospital = await HospitalSV.one(id);
    if (!hospital) return resOk(res, null);


    let { page, specialty, search } = req.query
    page = page ? page - 1 : 0
    const data = await DoctorSV.noHospital(page, search, hospital.id, specialty)
    const doctors = data.data.map(i => ({
      id: i.id,
      slug: i.slug,
      name: i.name,
      code: i.code,
      rating: i.rating,
      email: i.user?.email ?? i.email ?? "không có thông tin",
      img: i.img,
      address: i.address,
      phone: formatPhoneNumber(i.phone),
      specialty: i.specialty?.name ?? "Không có thông tin",
      specialtyIcon: i.specialty?.icon ?? "",
      hospital: i.hospital?.name ?? "không có thông tin"
    }))
    resOk(res, {
      doctos: doctors,
      page: page + 1,
      total: data.total,
    });
  }

  static async setDoctorsToHospital(req, res, next) {
    const id = Number(req.params.id)
    if (!id) return resOk(res, null);
    const hospital = await HospitalSV.one(id);
    if (!hospital) return resOk(res, null);
    const doctorIds = req.body.doctors
    const exitDoctorIds = (await DoctorSV.allHospital(hospital.id)).map(i => i.id)
    const upDoctors = doctorIds.filter(i => !exitDoctorIds.some(p => i == p))
    const downDoctors = exitDoctorIds.filter(i => !doctorIds.some(p => i == p))
    for (const doctorId of upDoctors) {
      await DoctorSV.edit(doctorId, { hospitalId: hospital.id })
    }
    for (const doctorId of downDoctors) {
      await DoctorSV.edit(doctorId, { hospitalId: null })
    }
    resOk(res, true);
  }

  static async getImgs(req, res, next) {
    const id = Number(req.params.id)
    if (!id) return resOk(res, []);
    const hospital = await HospitalSV.one(id);
    if (!hospital) return resOk(res, []);
    const imgs = await HospitalImageSV.hospital(hospital.id)
    resOk(res, imgs);
  }

  static async upImgs(req, res, next) {
    const id = Number(req.params.id)
    if (!id) return resOk(res, []);
    const hospital = await HospitalSV.one(id);
    if (!hospital) return resOk(res, []);
    const temp = await HospitalImageSV.ups(req.customFiles.map(i => {
      return {
        hospitalId: hospital.id,
        imageUrl: `/${i.subPath}/${i.filename}`
      }
    }))
    const imgs = await HospitalImageSV.hospital(hospital.id)
    resOk(res, imgs);
  }
  static async downImg(req, res, next) {
    const id = Number(req.params.id)
    if (!id) return resOk(res, null);
    const img = await HospitalImageSV.one(id);
    if (!img) return resOk(res, null);
    deleteFile(img.imageUrl)
    await HospitalImageSV.down(id)
    resOk(res, true);
  }

  static async initHospialSpecialtiesASevices(req, res, next) {
    const id = Number(req.params.id)
    if (!id) return resOk(res, null);
    const hospital = await HospitalSV.one(id);
    if (!hospital) return resOk(res, null);
    const specialties = await SpecialtiesSV.allInPage()
    const spcialtiesRS = specialties.data.map(i => ({
      id: i.id,
      name: i.name,
      icon: i.icon,
      title: i.title
    }))

    const service = await HospitalServiceSV.hospital(hospital.id)
    const sptIds = (await HospitalSpecialtySV.specialties(hospital.id)).map(i => i.specialtyId)
    let hospitalSpecialties = []
    if (sptIds.length > 0) {
      hospitalSpecialties = (await SpecialtiesSV.all(sptIds)).map(i => ({
        id: i.id,
        name: i.name,
        icon: i.icon,
        title: i.title
      }))
    }

    resOk(res, {
      hospitalSpecialties: hospitalSpecialties,
      services: service,
      specialties: spcialtiesRS,
      page: 1,
      total: specialties.total,

    });
  }

  static async getSpecialties(req, res, next) {
    try {
      let { page, search } = req.query
      page = page ? page - 1 : 0
      const data = await SpecialtiesSV.allInPage(page, search)
      const specialties = data.data.map(i => ({
        id: i.id,
        name: i.name,
        icon: i.icon,
        title: i.title
      }))
      resOk(res, {
        specialties: specialties,
        page: page + 1,
        totalPages: Math.ceil(data.total / 5),
        total: data.total,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async saveSpecialtiesAService(req, res, next) {
    const id = Number(req.params.id)
    if (!id) return resOk(res, []);
    const hospital = await HospitalSV.one(id);
    if (!hospital) return resOk(res, []);


    const { service, specialties } = req.body
    const exitServiceIds = (await HospitalServiceSV.hospital(hospital.id)).map(i => i.id)
    const newService = service.filter(i => i.id < 0)
    const deleteService = exitServiceIds.filter(i => !service.some(s => s.id == i))
    await HospitalServiceSV.down(deleteService)
    await HospitalServiceSV.ups(newService.map(i => ({
      hospitalId: hospital.id,
      serviceName: i.serviceName
    })))
    const exitSptIds = (await HospitalSpecialtySV.specialties(hospital.id)).map(i => i.specialtyId)
    const newSptIds = specialties.filter(i => !exitSptIds.some(s => s == i))
    const deleteSptIds = exitSptIds.filter(i => !specialties.some(s => s == i))
    await HospitalSpecialtySV.down(hospital.id, deleteSptIds)
    await HospitalSpecialtySV.ups(newSptIds.map(i => ({
      hospitalId: hospital.id,
      specialtyId: i
    })))

    const SVRS = await HospitalServiceSV.hospital(hospital.id)
    resOk(res, SVRS);
  }



}
module.exports = AdminHospital;
