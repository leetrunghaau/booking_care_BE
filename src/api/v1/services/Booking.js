const Booking = require("../models/booking");
const User = require("../models/user");

class BookingSV {
    static async all() {
        return await  Booking.findAll();
    }
    static async oneById(id) {
        return  await Booking.findOne();
    }
    static async allByPatient(id) {
        return  await Booking.findAll({ where: { patientId: id } })
    }
    static async allByDoctor(id) {
        return await  Booking.findAll({ where: { doctorId: id } })
    }
    static async allByDidADate(id, date) {
        return  await Booking.findAll({ where: { doctorId: id, bookingDate: date } });
    }
}

module.exports = BookingSV;
