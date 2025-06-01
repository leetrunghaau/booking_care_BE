const DoctorExperience = require("../models/doctor-experiences")

class DoctorExperienceSV {
    static async all() {
       
        return await DoctorExperience.findAll()
    }

    static async one(id) {
        return await DoctorExperience.findByPk(id)
    }

    static async doctor(id) {
        return await DoctorExperience.findAll({where:{ doctorId: id }})
    }

    static async up(data) {
        return await DoctorExperience.create(data)
    }
    static async edit(id, data) {
        return await DoctorExperience.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await DoctorExperience.destroy({ where: { id: id } })
    }

}

module.exports = DoctorExperienceSV;
