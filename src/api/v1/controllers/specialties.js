const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const SpecialtiesSV = require('../services/specialties');
const HospitalSV = require('../services/hospital');
const HospitalSpecialtySV = require('../services/hospital-specialties');
const DoctorSV = require('../services/doctor');
const SpecialtyFaqSV = require('../services/spcialty-faq');
const SpecialtyAdvantagesSV = require('../services/specialty-advantages');
const DiseaseSpecialtySV = require('../services/disease-specialty');
const DiseaseSV = require('../services/disease');
const moment = require("moment");
require('moment/locale/vi');
moment.locale('vi');
class Specialties {
    static async all(req, res, next) {
        try {
            const specialties = await SpecialtiesSV.all()
            const rs = specialties.map(i => {
                return {
                    id: i.id,
                    name: i.name ?? "không có thông tin",
                    slug: i.slug ?? "không có thông tin",
                    icon: i.icon ?? "không có thông tin",
                    title: i.title ?? "không có thông tin",
                }
            })
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async oneBySlug(req, res, next) {
        try {
            const specialty = await SpecialtiesSV.oneBySlug(req.params.slug)
            if (!specialty) return resOk(res, null)

            const hospitalIds = (await HospitalSpecialtySV.hospitals(specialty.id)).map(i => i.hospitalId)
            const hospitals = hospitalIds.length > 0 ? (await HospitalSV.all(hospitalIds)).map(i => {
                return {
                    id: i.id,
                    thumbnail: i.thumbnail,
                    name: i.name,
                    address: i.address,
                    slug: i.slug,
                }
            }) : []
            const doctors = (await DoctorSV.allPid(specialty.id)).map(i => {
                return {
                    id: i.id,
                    img: i.img,
                    name: i.name,
                    title: i.hospital?.name ?? "Bác sĩ tư nhân",
                    rating: i.rating,
                    sumRating: i.reviews,
                }
            })
            const faqs = (await SpecialtyFaqSV.specialties(specialty.id)).map(i => {
                return {
                    id: i.id,
                    question: i.question,
                    answer: i.answer
                }
            })

            const advantages = (await SpecialtyAdvantagesSV.specialties(specialty.id)).map(i => {
                return {
                    id: i.id,
                    name: i.name
                }
            })
            const diseaseIds = (await DiseaseSpecialtySV.disease(specialty.id)).slice(0, 5).map(i => i.diseaseId)
            const disease = diseaseIds.length > 0 ? await DiseaseSV.all(diseaseIds) : []

            // nối kết quả
            resOk(res, {
                id: specialty.id,
                slug: specialty.slug,
                icon: specialty.icon,
                img: specialty.img,
                icon: specialty.icon,
                name: specialty.name,
                about: specialty.about,
                hospitals: hospitals,
                doctors: doctors,
                faqs: faqs,
                advantages: advantages,
                disease: disease

            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Specialties;
