const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Specialty = require("../models/specialty");

class DoctorSV {
    static async all() {
        return Doctor.findAll({ include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async oneBySlug(slug) {
        return Doctor.findOne({ where: { slug: slug }, include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async onId(id) {
        return Doctor.findOne({ where: { id: id }, include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async onByUId(id) {
        return Doctor.findOne({ where: { userId: id }, include: [{ model: Hospital }, { model: Specialty }] });
    }
}


module.exports = DoctorSV;
