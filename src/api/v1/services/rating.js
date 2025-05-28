const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const Rating = require("../models/rating");

class RatingSV {
    static async all() {
        return Rating.findAll({ include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async allDId(id) {
        return Rating.findAll({ where: { doctorId: id }, include: [{ model: Doctor }, { model: Patient }] });
    }
    static async countDId(id) {
        return Rating.count({ where: { doctorId: id } });
    }
    static async allDIdvsL(id, len) {
        return Rating.findAll({ where: { doctorId: id }, limit: len , include: [{ model: Doctor }, { model: Patient }]});
    }
}

module.exports = RatingSV;
