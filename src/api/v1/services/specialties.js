const { Op } = require("sequelize");
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const HospitalSpecialty = require("../models/hospital-spacialty");
const Specialty = require("../models/specialty");

class SpecialtiesSV {

    static async all() {
        return await Specialty.findAll();
    }


    static async oneBySlug(slug) {
        return await Specialty.findOne({
            where: { slug: slug }
        });
    }

    static async doctors(id) {
        return await Doctor.findAll({
            where: { specialtyId: id },
            include: [
                { model: Specialty }
            ]
        });
    }
    static async hospitals(ids) {
        return await Hospital.findAll({
            where: { id: ids }
        });
    }
    static async hospitalIds(id) {
        return await HospitalSpecialty.findAll({
            where: { specialtyId: id },
            attributes: ['id']
        });
    }
}

module.exports = SpecialtiesSV;
