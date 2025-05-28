const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const HospitalSpecialty = require("../models/hospital-spacialty");
const Specialty = require("../models/specialty");

class SpecialtiesSV {

    static async all() {
        return Specialty.findAll();
    }

    static async oneBySlug(slug) {
        return Specialty.findOne({
            where: { slug: slug }
        });
    }

    static async doctors(id) {
        return Doctor.findAll({
            where: { specialtyId: id },
            include:[
                {model: Specialty}
            ]
        });
    }
    static async hospitals(ids) {
        return Hospital.findAll({
            where: { id: ids }
        });
    }
    static async hospitalIds(id) {
        return HospitalSpecialty.findAll({
            where: { specialtyId: id },
            attributes: ['id']
        });
    }
}

module.exports = SpecialtiesSV;
