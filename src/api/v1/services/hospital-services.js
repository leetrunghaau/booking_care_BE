const HospitalService = require("../models/hospital-services")


class HospitalServiceSV {
    static async all() {
        return await HospitalService.findAll()
    }
    static async hospital(hospitalId) {
        return await HospitalService.findAll({where: {hospitalId: hospitalId}})
    }

    static async one(id) {
        await HospitalService.findOrCreate
        return await HospitalService.findByPk(id)
    }

    static async up(data) {
        return await HospitalService.create(data)
    }
    static async ups(data) {
        return await HospitalService.bulkCreate(data)
    }

    static async edit(id, data) {
        return await HospitalService.update(data, { where: { id: id } });
    }

    static async down(id) {
        return await HospitalService.destroy({ where: { id: id } })
    }

}

module.exports = HospitalServiceSV;