// brandRepository.js

const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const HospitalSpecialty = require("../models/hospital-spacialty");
const Specialty = require("../models/specialty");


class HospitalSV {

    static async all() {
        return await  Hospital.findAll({attributes:['id', 'name', 'address', 'slug', 'thumbnail']});
    }

     static async onBySlug(slug) {
        return await  Hospital.findOne({where: {slug: slug}})
    }

     static async doctorsById(id) {
        return await  Doctor.findAll({where: {hospitalId: id}, include:[{model: Specialty}]})
    }

    static async specialtiesById(id) {
        const idss = await HospitalSpecialty.findAll({where: {hospitalId: id}})
        const ids = idss.map(i=>i.specialtyId)
        return  await Specialty.findAll({where: {id: ids} })
    }

}

module.exports = HospitalSV;
