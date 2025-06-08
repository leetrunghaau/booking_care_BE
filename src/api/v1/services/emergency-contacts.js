const EmergencyContact = require("../models/emergency-contacts")

class EmergencyContactSV {
    static async all() {

        return await EmergencyContact.findAll()
    }
 
    static async one(id) {
        return await EmergencyContact.findByPk(id)
    }

    static async onePatient(id) {
        return await EmergencyContact.findOne({ where: { patientId: id } })
    }

    static async up(data) {
        return await EmergencyContact.create(data)
    }
    static async edit(id, data) {
        return await EmergencyContact.update(data, { where: { id: id } })
    }

    static async down(id) {
        return await EmergencyContact.destroy({ where: { id: id } })
    }

}

module.exports = EmergencyContactSV;


