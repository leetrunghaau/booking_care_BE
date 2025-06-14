const DoctorLanguage = require("../models/doctor-languages")

class DoctorLanguageSV {
    static async all() {
       
        return await DoctorLanguage.findAll()
    }

    static async one(id) {
        return await DoctorLanguage.findByPk(id)
    }

    static async doctor(id) {
        return await DoctorLanguage.findAll({where:{ doctorId: id }})
    }

    static async up(data) {
        return await DoctorLanguage.create(data)
    }
    static async ups(data) {
        return await DoctorLanguage.bulkCreate(data)
    }
    static async edit(id, data) {
        return await DoctorLanguage.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await DoctorLanguage.destroy({ where: { id: id } })
    }

}

module.exports = DoctorLanguageSV;


