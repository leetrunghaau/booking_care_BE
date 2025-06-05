const BookingFile = require("../models/booking-file")

class BookingFileSV {
    static async all() {
       
        return await BookingFile.findAll()
    }

    static async one(id) {
        return await BookingFile.findByPk(id)
    }
    static async allByBookingId(id) {
        return await BookingFile.findAll({where:{bookingId: id}})
    }

    static async up(data) {
        return await BookingFile.create(data)
    }
    static async edit(id, data) {
        return await BookingFile.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await BookingFile.destroy({ where: { id: id } })
    }

}

module.exports = BookingFileSV;


