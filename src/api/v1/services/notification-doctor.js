const NotificationDoctor = require("../models/notification-Doctor")


class NotificationDoctorSV {
    static async all() {

        return await NotificationDoctor.findAll()
    }
    static async allBDoctor(id) {
    return await NotificationDoctor.findAll({
        where: { doctorId: id },
        order: [
            ['isRead', 'ASC'],      
            ['createdAt', 'DESC']   
        ],
        limit: 10
    });
}
    static async allMyUnRead(id) {

        return await NotificationDoctor.findAll({ where: { doctorId: id , isRead: false} })
    }

    static async one(id) {
        return await NotificationDoctor.findByPk(id)
    }

    static async up(data) {
        return await NotificationDoctor.create(data)
    }
    static async edit(id, data) {
        return await NotificationDoctor.update(data, { where: { id: id } })
    }

    static async down(id) {
        return await NotificationDoctor.destroy({ where: { id: id } })
    }

}

module.exports = NotificationDoctorSV;


