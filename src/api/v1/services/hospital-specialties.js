const Hospital = require("../models/hospital");
const HospitalSpecialty = require("../models/hospital-specialties");
const Specialty = require("../models/specialty");

class HospitalSpecialtySV {
    static async all() {
        return await HospitalSpecialty.findAll()
    }
    static async hospitals(specialtyId) {
        return await HospitalSpecialty.findAll({where: {specialtyId: specialtyId}, include: [{model: Hospital}]})
    }
    static async specialties(hospitalId) {
        return await HospitalSpecialty.findAll({where: {hospitalId: hospitalId}, include: [{model: Specialty}]})
    }

    static async one(id) {
        return await HospitalSpecialty.findByPk(id)
    }

    static async up(data) {
        return await HospitalSpecialty.create(data)
    }
    static async ups(data) {
        return await HospitalSpecialty.bulkCreate(data)
    }

    static async down(hospitalId, specialtyId) {
        return await HospitalSpecialty.destroy({ where: { hospitalId: hospitalId, specialtyId: specialtyId } })
    }

}

module.exports = HospitalSpecialtySV;