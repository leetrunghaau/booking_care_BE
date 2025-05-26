
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Specialty = require("../models/specialty");



class DoctorSiteSV {
    static async all() {
        return Doctor.findAll({ include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async oneBySlug(slug) {
        return Doctor.findOne({ where: { slug: slug }, include: [{ model: Hospital }, { model: Specialty }] });
    }
}

module.exports = DoctorSiteSV;
