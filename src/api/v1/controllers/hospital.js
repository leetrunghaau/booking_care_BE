const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const HospitalSV = require('../services/hospital');
const HospitalSpecialtySV = require('../services/hospital-specialties');
const HospitalImageSV = require('../services/hospital-images');
const HospitalServiceSV = require('../services/hospital-services');
const HospitalTimeSV = require('../services/hospital-times');
const { formatPhoneNumber } = require('../helpers/num');
const { getReadableTimeRanges } = require('../helpers/time');
const SpecialtiesSV = require('../services/specialties');
const DoctorSV = require('../services/doctor');
class HospitalCo {
    static async all(req, res, next) {
        try {
            const rs = await HospitalSV.all()
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctorsById(req, res, next) {
        try {

            console.log("bác sĩ ở bệnh viện", rs)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async specialtiesById(req, res, next) {
        try {

            console.log("các khoa bệnh viện", rs)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async oneBySlug(req, res, next) {
        try {
            const hospital = await HospitalSV.onBySlug(req.params.slug)
            if (!hospital) {
                resOk(res, null)
            }
            const doctors = (await DoctorSV.allHospital(hospital.id)).map(i => {
                return {
                    id: i.id,
                    img: i.img,
                    name: i.name,
                    specialty: i.specialty?.name ?? "Bác sĩ tổng quát"

                }
            })
            console.log(doctors)
            const specialtiesIds = (await HospitalSpecialtySV.specialties(hospital.id)).map(i => i.specialtyId)            
            const specialties =specialtiesIds.length >0 ? (await SpecialtiesSV.all(specialtiesIds)).map(i => {
                return {
                    id: i.id, 
                    name: i.name,
                    slug: i.slug,
                    icon: i.icon
                }
            })    :[]        
            const imgs = (await HospitalImageSV.hospital(hospital.id)).map(i => i.imageUrl)
            const services = (await HospitalServiceSV.hospital(hospital.id)).map(i => i.serviceName)
            const times = (await HospitalTimeSV.hospital(hospital.id)).map(i => {
                return {
                    weekend: i.weekend,
                    timeStart: i.timeStart,
                    timeEnd: i.timeEnd
                }
            })
            resOk(res, {
                id: hospital.id,
                name: hospital.name ?? "Không có thông tin",
                slug: hospital.slug,
                address: hospital.address ?? " Không có thông tin",
                description: hospital.about ?? "Không có thông tin",
                phone: hospital.phone ? formatPhoneNumber(hospital.phone) : "không có tôn tin",
                times: times.length > 0 ? getReadableTimeRanges(times) : ["Không có thông tin"],
                license: hospital.license ?? "Không có tông tin",
                imgs: imgs,
                years: hospital.years ? `${hospital.years} +`: "0 +",
                mapEmbedUrl: hospital.mapEmbedUrl,
                services: services,
                doctors: doctors,
                specialties: specialties,
                thumbnail: hospital.thumbnail
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = HospitalCo;
