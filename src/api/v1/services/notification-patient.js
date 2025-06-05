
const NotificationPatient = require("../models/notification-patient")

class NotificationPatientSV {
    static async all() {

        return await NotificationPatient.findAll()
    }
    static async allBPatient(id) {

        return await NotificationPatient.findAll({ where: { patientId: id } })
    }
    static async allMyUnRead(id) {

        return await NotificationPatient.findAll({ where: { patientId: id , isRead: false} })
    }

    static async one(id) {
        return await NotificationPatient.findByPk(id)
    }

    static async up(data) {
        return await NotificationPatient.create(data)
    }
    static async edit(id, data) {
        return await NotificationPatient.update(data, { where: { id: id } })
    }

    static async down(id) {
        return await NotificationPatient.destroy({ where: { id: id } })
    }

}

module.exports = NotificationPatientSV;


