const Doctor = require("../models/doctor");
const MedicalRecord = require("../models/medical_records")

class MedicalRecordSV {
    static async all() {

        return await MedicalRecord.findAll()
    }
   static async allBPantient(id) {
    return await MedicalRecord.findAll({
        where: { patientId: id },
        include:[{model: Doctor}],
        order: [['createdAt', 'DESC']] 
    });
}
    static async oneBooking(bookingId){
        return await MedicalRecord.findOne({where: {bookingId: bookingId}})
    }
    static async one(id) {
        return await MedicalRecord.findByPk(id)
    }

    static async up(data) {
        return await MedicalRecord.create(data)
    }
    static async edit(id, data) {
        return await MedicalRecord.update(data, { where: { id: id } })
    }

    static async down(id) {
        return await MedicalRecord.destroy({ where: { id: id } })
    }

}

module.exports = MedicalRecordSV;


