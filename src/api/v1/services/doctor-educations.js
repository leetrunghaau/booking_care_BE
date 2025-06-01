const DoctorEducation = require("../models/doctor-educations")

class DoctorEducationSV {
    static async all() {
       
        return await DoctorEducation.findAll()
    }

    static async one(id) {
        return await DoctorEducation.findByPk(id)
    }

    static async doctor(id) {
        return await DoctorEducation.findAll({where:{ doctorId: id }})
    }

    static async up(data) {
        return await DoctorEducation.create(data)
    }
    static async edit(id, data) {
        return await DoctorEducation.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await DoctorEducation.destroy({ where: { id: id } })
    }

}

module.exports = DoctorEducationSV;