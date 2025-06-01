const HospitalService = require("../models/hospital-services")


class HospitalServiceSV {
    static async all() {
        return await HospitalService.findAll()
    }
    static async hospital(hospitalId) {
        return await HospitalService.findAll({where: {hospitalId: hospitalId}})
    }

    static async one(id) {
        return await HospitalService.findByPk(id)
    }

    static async up(data) {
        return await HospitalService.create(data)
    }

    static async down(id) {
        return await HospitalService.destroy({ where: { id: id } })
    }

}

module.exports = HospitalServiceSV;