const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const SpecialtiesSV = require('../services/specialties');
class Specialties {
    static async all(req, res, next) {
        try {
            const specialties = await SpecialtiesSV.all()
            console.log(specialties)

            resOk(res, specialties);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async oneBySlug(req, res, next) {
        try {


            const specialty = await SpecialtiesSV.oneBySlug(req.params.slug, ["id", "name", "icon", "description", "img", "commonDiseases", "advantages", "faqs"])
            if (!specialty) {
                resOk(res, null)
                return;
            }
            const doctors = await SpecialtiesSV.doctors(specialty.id)
            const hospitalIds = await SpecialtiesSV.hospitalIds(specialty.id)
            const ids = hospitalIds.map(i => i.id)
            const hospitals = await SpecialtiesSV.hospitals(ids)

            const rs = {
                id: specialty.id,
                name: specialty.name,
                icon: specialty.icon,
                description: specialty.description,
                img: specialty.img,
                commonDiseases: specialty.commonDiseases,
                advantages: specialty.advantages,
                faqs: specialty.faqs,
                hospitals: hospitals.map(i => (({ slug: i.slug, name: i.name, address: i.address, thumbnail: i.thumbnail }))),
                doctors: doctors.map(i => ({ id: i.id, name: i.user?.name ?? "", title: i.specialty?.name ?? "", img: i.img, rating: i.rating, sumRating: i.sumRating }))
            }

            // nối kết quả
            console.log(doctors)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Specialties;
