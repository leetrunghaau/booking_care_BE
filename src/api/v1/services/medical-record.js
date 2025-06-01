const MedicalRecord = require("../models/medical_records")

class MedicalRecordSV {
    static async all() {
       
        return await MedicalRecord.findAll()
    }
    static async havePD(doctorId, patientId) {
       
        return await MedicalRecord.findAll({where:{
            doctorId: doctorId,
            patientId: patientId
        }})
    }

    static async one(id) {
        return await MedicalRecord.findByPk(id)
    }

    static async up(data) {
        return await MedicalRecord.create(data)
    }
    static async edit(id, data) {
        return await MedicalRecord.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await MedicalRecord.destroy({ where: { id: id } })
    }

}

module.exports = MedicalRecordSV;


