const IcdDiagnosis = require("../models/icd-diagnoses")

class IcdDiagnosisSV {
    static async all() {
       
        return await IcdDiagnosis.findAll()
    }

    static async one(id) {
        return await IcdDiagnosis.findByPk(id)
    }

    static async up(data) {
        return await IcdDiagnosis.create(data)
    }
    static async edit(id, data) {
        return await IcdDiagnosis.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await IcdDiagnosis.destroy({ where: { id: id } })
    }

}

module.exports = IcdDiagnosisSV;


