const Vitals = require("../models/vitals")

class VitalsSV {
    static async all() {
       
        return await Vitals.findAll()
    }

    static async one(id) {
        return await Vitals.findByPk(id)
    }
    static async oneByRecordId(id) {
        return await Vitals.findOne({where:{medicalRecordId: id}})
    }

    static async up(data) {
        return await Vitals.create(data)
    }
    static async edit(id, data) {
        return await Vitals.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await Vitals.destroy({ where: { id: id } })
    }

}

module.exports = VitalsSV;


