const LabResult = require("../models/lab-results")

class LabResultSV {
    static async all() {
       
        return await LabResult.findAll()
    }

    static async one(id) {
        return await LabResult.findByPk(id)
    }

    static async up(data) {
        return await LabResult.create(data)
    }
    static async edit(id, data) {
        return await LabResult.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await LabResult.destroy({ where: { id: id } })
    }

}

module.exports = LabResultSV;


