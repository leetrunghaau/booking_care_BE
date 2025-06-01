const { Op } = require("sequelize");
const Booking = require("../models/booking");
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Patient = require("../models/patient");
const User = require("../models/user");

class BookingSV {
    static async all() {
        return await Booking.findAll();
    }
    static async allByDay(date) {
        return await Booking.findAll({ where: { bookingDate: date } });
    }
    static async allByDoctorADay(id, date) {
        return await Booking.findAll({
            where: {
                bookingDate: date,
                doctorId: id
            },
            include: [
                {
                    model: Patient,
                    include: [{ model: User }]
                },
                {
                    model: Doctor,
                    include: [{ model: User }, { model: Hospital }]
                }
            ]
        });
    }
    static async oneById(id) {
        return await Booking.findByPk(id);
    }
    static async historyPatient(id) {
        const today = new Date().toISOString().split("T")[0];

        return await Booking.findAll({
            where: {
                patientId: id,
                status: "completed",
                bookingDate: {
                    [Op.lte]: today 
                }
            },
            include: [
                {
                    model: Doctor,
                    include: [{ model: Hospital }]
                }
            ],
            order: [['bookingDate', 'DESC']] 
        });
    }

    static async allByPatient(id) {
        return await Booking.findAll({ where: { patientId: id } })
    }
    static async haveBooking(doctorId, patientId) {
        return await Booking.findAll({ where: { 
            patientId: patientId,
            doctorId: doctorId,
            status: "completed",
        } })
    }
    static async allByDoctor(id) {
        return await Booking.findAll({ where: { doctorId: id } })
    }
    static async up(data) {
        return await Booking.create(data)
    }
    static async allByDidADate(id, date) {
        return await Booking.findAll({ where: { doctorId: id, bookingDate: date } });
    }
}

module.exports = BookingSV;
