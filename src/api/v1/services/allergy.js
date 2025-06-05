const Allergy = require("../models/allergy")

class AllergySV {
    static async all() {
       
        return await Allergy.findAll()
    }
    static async allBPatient(id) {
       
        return await Allergy.findAll({where: {patientId: id}})
    }

    static async one(id) {
        return await Allergy.findByPk(id)
    }

    static async up(data) {
        return await Allergy.create(data)
    }
    static async edit(id, data) {
        return await Allergy.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await Allergy.destroy({ where: { id: id } })
    }

}

module.exports = AllergySV;


