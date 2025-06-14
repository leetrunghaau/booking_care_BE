const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const SpecialtiesSV = require("../services/specialties");
const moment = require('moment');
const DoctorLanguageSV = require("../services/doctor-languages");
const DoctorAnalysisSV = require("../services/doctor-analyses");
const DoctorEducationSV = require("../services/doctor-educations");
const DoctorExperienceSV = require("../services/doctor-experiences");
const DoctorTechniquesSV = require("../services/doctor-techniques");
const ScheduleSV = require("../services/schedule");
const { formatVND, formatPhoneNumber } = require("../helpers/num");
const { getVNGender } = require("../helpers/text");
const { getActiveDays } = require("../helpers/dayly");
require('moment/locale/vi');
moment.locale('vi');

class DoctorProfile {
    static async getProfile(req, res, next) {
        try {
            const doctor = await DoctorSV.onByUId(req.user.id)
            if (!doctor) return resOk(res, null)
            const languages = await DoctorLanguageSV.doctor(doctor.id)
            const analyses = await DoctorAnalysisSV.doctor(doctor.id)
            const educations = await DoctorEducationSV.doctor(doctor.id)
            const experiences = await DoctorExperienceSV.doctor(doctor.id)
            const techniques = await DoctorTechniquesSV.doctor(doctor.id)
            const schedule = await ScheduleSV.mainDId(doctor.id)

            let workingHours = "Không có thông tin."

            if (schedule) {
                const workingDays = getActiveDays(schedule.workingDays)
                workingHours = `Làm việc ${workingDays.length} ngày/tuần \nTừ ${moment(schedule.startTime, "HH:mm:ss").format("HH:mm")} - ${moment(schedule.endTime, "HH:mm:ss").format("HH:mm")}`;
                if (schedule.hasLunchBreak) {
                    workingHours += `\n nghỉ trưa ${moment(schedule.lunchStart, "HH:mm:ss").format("HH:mm")} - ${moment(schedule.lunchEnd, "HH:mm:ss").format("HH:mm")}`;
                }
            }

            resOk(res, {
                id: doctor.id,
                name: doctor.name ?? "",
                img: doctor.img,
                specialty: doctor?.specialty?.name ?? "Bác sĩ đa khoa",
                gender: getVNGender(doctor.gender),
                dateOfBirth: doctor.dob ? (moment(doctor).format("DD-MM-YYYY")) : "Không có thông tin",
                languages: languages.length > 0 ? languages.map(i => i.language) : ["Tiếng Việt"],
                price: schedule?.appointmentPrice ? formatVND(schedule.appointmentPrice) : "Không có thông tin",

                about: doctor?.about ?? "",
                email: req.user?.email ?? doctor?.email ?? "không có thông tin",
                phone: formatPhoneNumber(doctor?.phone),
                address: doctor?.hospital?.address ?? doctor?.address ?? "không có thông tin",
                workingHours: workingHours,

                experiences: experiences,
                educations: educations,
                analyses: analyses,
                techniques: techniques


            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = DoctorProfile;
