const Prescription = require("../models/prescriptions")

class PrescriptionSV {
    static async all() {

        return await Prescription.findAll()
    }
    static async allByRecordId(id) {

        return await Prescription.findAll({where: {medicalRecordId: id}})
    }

    static async one(id) {
        return await Prescription.findByPk(id)
    }

    static async up(data) {
        return await Prescription.create(data)
    }
    static async edit(id, data) {
        return await Prescription.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await Prescription.destroy({ where: { id: id } })
    }

}

module.exports = PrescriptionSV;


