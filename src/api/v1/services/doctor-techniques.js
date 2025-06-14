const DoctorTechnique = require("../models/doctor-techniques");

class DoctorTechniquesSV {
    static async all() {

        return await DoctorTechnique.findAll()
    }

    static async one(id) {
        return await DoctorTechnique.findByPk(id)
    }
    static async doctor(id) {
        return await DoctorTechnique.findAll({ where: { doctorId: id } })
    }

    static async edit(id, data) {
        return await DoctorTechnique.update(data, { where: { id: id } })
    }

    static async up(data) {
        return await DoctorTechnique.create(data)
    }
    static async ups(data) {
        return await DoctorTechnique.bulkCreate(data)
    }

    static async down(id) {
        return await DoctorTechnique.destroy({ where: { id: id } })
    }

}

module.exports = DoctorTechniquesSV;


