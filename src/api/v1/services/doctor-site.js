
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Specialty = require("../models/specialty");



class DoctorSiteSV {
    static async all() {
        return Doctor.findAll({include:[{model: Hospital}, {model:Specialty}]});
    }
}

module.exports = DoctorSiteSV;
