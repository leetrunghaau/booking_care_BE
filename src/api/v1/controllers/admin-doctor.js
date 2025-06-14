const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const HospitalSV = require("../services/hospital");
const SpecialtiesSV = require("../services/specialties");
const { formatPhoneNumber } = require("../helpers/num");
const UserSV = require("../services/user");
const moment = require("moment");
const DoctorLanguageSV = require("../services/doctor-languages");
const DoctorTechniquesSV = require("../services/doctor-techniques");
const { deleteFile } = require("../helpers/files");
const ScheduleSV = require("../services/schedule");
const { getActiveDays, getBinaryFromActiveDays } = require("../helpers/dayly");
require('moment/locale/vi');
moment.locale('vi');

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
      if (checkMail) return resOk(res, { status: false, mess: "Email đã tồn tại trên hệ thống" })
      const checkMail2 = await DoctorSV.oneEmail(input.email)
      if (checkMail2) return resOk(res, { status: false, mess: "Email đã tồn tại trên hệ thống" })

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
      resOk(res, { status: true, id: doctor.id });
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
        name: doctor.name
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

  static async getFullHospital(req, res, next) {
    try {
      const hospitals = (await HospitalSV.all()).map(i => ({
        id: i.id,
        name: i.name,
        img: i.thumbnail,
        title: i.title
      }))
      resOk(res, hospitals);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getFullSpecialty(req, res, next) {
    try {

      const specialties = (await SpecialtiesSV.all()).map(i => ({
        id: i.id,
        name: i.name,
        icon: i.icon,
        title: i.title
      }))
      resOk(res, specialties);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getDoctorGeneralInfo(req, res, next) {
    try {

      const id = Number(req.params.id)
      if (!id) return resOk(res, false);

      const doctor = await DoctorSV.one(id)
      if (!doctor) return resOk(res, false);

      const dtLangs = (await DoctorLanguageSV.doctor(doctor.id)).map(i => ({
        id: i.id,
        name: i.language
      }))
      const dtSkills = (await DoctorTechniquesSV.doctor(doctor.id)).map(i => ({
        id: i.id,
        name: i.techniqueName
      }))
      resOk(res, {
        doctor: {
          name: doctor.name,
          gender: doctor.gender,
          phone: doctor.phone,
          email: doctor.email,
          dob: doctor.dob,
          about: doctor.about,
          img: doctor.img,
          hospitalId: doctor.hospitalId,
          specialtyId: doctor.specialtyId,
        },
        langs: dtLangs,
        skills: dtSkills
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async postDoctorGeneralInfo(req, res, next) {
    try {

      const id = Number(req.params.id)
      if (!id) return resOk(res, false);

      const instanDoctor = await DoctorSV.one(id)
      if (!instanDoctor) return resOk(res, false);

      const { doctor, langs, skills } = req.body



      if (doctor) {
        if (doctor.email) {
          const checkMail = await UserSV.oneEmail(doctor.email)
          const checkMail1 = await DoctorSV.oneEmail(doctor.email)
          if (
            (checkMail && checkMail.id !== instanDoctor.userId) ||
            (checkMail1 && checkMail1.id !== instanDoctor.id)
          ) return resOk(res, { mess: "Email này đã được đăng ký" })

          if (instanDoctor.userId) {
            await UserSV.edit(instanDoctor.userId, { email: doctor.email })
            
          }
        }
        if (doctor.img === null && instanDoctor.img) {
          deleteFile(instanDoctor.img)
          doctor.img = null
        }
        await DoctorSV.edit(instanDoctor.id, doctor)
      }

      if (langs) {
        const exitLangIds = (await DoctorLanguageSV.doctor(instanDoctor.id)).map(i => i.id)
        const newLangs = langs.filter(i => !exitLangIds.some(p => p == i.id))
        const deleteLang = exitLangIds.filter(i => !langs.some(p => p.id == i))
        await DoctorLanguageSV.down(deleteLang)
        await DoctorLanguageSV.ups(newLangs.map(i => ({
          doctorId: instanDoctor.id,
          language: i.name
        })))
      }
      if (skills) {
        const exitSkillIds = (await DoctorTechniquesSV.doctor(instanDoctor.id)).map(i => i.id)
        const newSkills = skills.filter(i => !exitSkillIds.some(p => p == i.id))
        const deleteSkill = exitSkillIds.filter(i => !skills.some(p => p.id == i))
        await DoctorTechniquesSV.down(deleteSkill)
        await DoctorTechniquesSV.ups(newSkills.map(i => ({
          doctorId: instanDoctor.id,
          techniqueName: i.name
        })))
      }
      const docRS = await DoctorSV.one(instanDoctor.id)
      const dtLangs = (await DoctorLanguageSV.doctor(instanDoctor.id)).map(i => ({
        id: i.id,
        name: i.language
      }))
      const dtSkills = (await DoctorTechniquesSV.doctor(instanDoctor.id)).map(i => ({
        id: i.id,
        name: i.techniqueName
      }))
      resOk(res, {
        ok:true,
        doctor: {
          name: docRS.name,
          gender: docRS.gender,
          phone: docRS.phone,
          email: docRS.email,
          dob: docRS.dob,
          about: docRS.about,
          img: docRS.img,
          hospitalId: docRS.hospitalId,
          specialtyId: docRS.specialtyId,
        },
        langs: dtLangs,
        skills: dtSkills
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async postImg(req, res, next) {
    try {

      const id = Number(req.params.id)
      if (!id) return resOk(res, false);

      const doctor = await DoctorSV.one(id)
      if (!doctor) return resOk(res, false);
      await DoctorSV.edit(doctor.id, {
        img: `/${req.customFile.subPath}/${req.customFile.filename}`
      })


      resOk(res, `/${req.customFile.subPath}/${req.customFile.filename}`);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getScheduleSettings(req, res, next) {

    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const doctor = await DoctorSV.one(id)
      if (!doctor) return resOk(res, false);
      const schedule = await ScheduleSV.mainDId(doctor.id);
      if (!schedule) return resOk(res, null);
      const template = await ScheduleSV.template(doctor.id);
      resOk(res, {
        id: schedule.id,
        workingDays: getActiveDays(schedule.workingDays),
        appointmentDuration: schedule.appointmentDuration || 30,
        appointmentPrice: schedule.appointmentPrice || 0,
        startTime: moment(schedule.startTime, "HH:mm:ss").format("HH:mm"),
        endTime: moment(schedule.endTime, "HH:mm:ss").format("HH:mm"),
        hasLunchBreak: schedule.hasLunchBreak,
        notes: schedule.notes || "",
        lunchStart: schedule.lunchStart ? moment(schedule.lunchStart, "HH:mm:ss").format("HH:mm") : "",
        lunchEnd: schedule.lunchEnd ? moment(schedule.lunchEnd, "HH:mm:ss").format("HH:mm") : "",
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async updateScheduleSettings(req, res, next) {
    try {
      const id = Number(req.params.id)
      if (!id) return resOk(res, false);
      const doctor = await DoctorSV.one(id)
      if (!doctor) return resOk(res, false);

      const input = req.body;

      const parseTime = (time) =>
        time ? moment(time, "HH:mm").format("HH:mm:ss") : null;

      const scheduleData = {
        doctorId: doctor.id,
        workingDays: getBinaryFromActiveDays(input.workingDays),
        startTime: parseTime(input.startTime),
        endTime: parseTime(input.endTime),
        appointmentDuration: input.appointmentDuration || 30,
        appointmentPrice: input.appointmentPrice,
        hasLunchBreak: !!input.hasLunchBreak,
        lunchStart: parseTime(input.lunchStart),
        lunchEnd: parseTime(input.lunchEnd),
        notes: input.notes || "",
      };

      if (input.id) {
        await ScheduleSV.edit(input.id, { id: input.id, ...scheduleData });
      } else {
        const existingSchedule = await ScheduleSV.mainDId(doctor.id);
        if (existingSchedule) {
          await ScheduleSV.edit(existingSchedule.id, { isDefault: false });
        }

        const newSchedule = await ScheduleSV.up({
          ...scheduleData,
          isDefault: true,
        });
        input.id = newSchedule.id;
      }

      const schedule = await ScheduleSV.mainDId(doctor.id);
      if (!schedule) return resOk(res, null);

      const formatTime = (time) =>
        time ? moment(time, "HH:mm:ss").format("HH:mm") : null;

      resOk(res, {
        id: schedule.id,
        workingDays: getActiveDays(schedule.workingDays),
        appointmentDuration: schedule.appointmentDuration || 30,
        appointmentPrice: schedule.appointmentPrice,
        startTime: formatTime(schedule.startTime),
        endTime: formatTime(schedule.endTime),
        hasLunchBreak: schedule.hasLunchBreak,
        lunchStart: formatTime(schedule.lunchStart),
        lunchEnd: formatTime(schedule.lunchEnd),
        notes: schedule.notes || "",
      });
    } catch (error) {
      console.error(error);
      return next(createError.InternalServerError());
    }
  }

}
module.exports = AdminDoctors;
