const BookingPrescription = require("../models/booking-prescriptions")

class BookingPrescriptionSV {
    static async all() {
       
        return await BookingPrescription.findAll()
    }

    static async one(id) {
        return await BookingPrescription.findByPk(id)
    }
    static async allByBookingId(id) {
        return await BookingPrescription.findAll({where:{bookingId: id}})
    }
    static async up(data) {
        return await BookingPrescription.create(data)
    }
    static async edit(id, data) {
        return await BookingPrescription.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await BookingPrescription.destroy({ where: { id: id } })
    }

}

module.exports = BookingPrescriptionSV;


