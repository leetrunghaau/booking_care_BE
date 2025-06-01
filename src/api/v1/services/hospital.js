// brandRepository.js

const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const HospitalSpecialty = require("../models/hospital-specialties");
const Specialty = require("../models/specialty");


class HospitalSV {

    static async all(ids = []) {
        if (ids.length > 0) return await Hospital.findAll({ where: { id: ids } });
        return await Hospital.findAll();
    }
    static async onBySlug(slug) {
        return await Hospital.findOne({ where: { slug: slug } })
    }

    static async doctors(id) {
        return await Doctor.findAll({ where: { hospitalId: id }, include: [{ model: Specialty }] })
    }

    static async specialties(id) {
        const idss = await HospitalSpecialty.findAll({ where: { hospitalId: id } })
        const ids = idss.map(i => i.specialtyId)
        return await Specialty.findAll({ where: { id: ids } })
    }

}

module.exports = HospitalSV;
