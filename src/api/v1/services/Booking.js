const { Op, Sequelize } = require("sequelize");
const Booking = require("../models/booking");
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Patient = require("../models/patient");
const User = require("../models/user");
const Specialty = require("../models/specialty");

class BookingSV {
    static async all() {
        return await Booking.findAll();
    }
    static async allByDay(date) {
        return await Booking.findAll({ where: { day: date } });
    }
    static async countDoctor(id, status = null) {
        const query = {}
        query.doctorId = id
        if (status) {
            query.status = status
        }
        return await Booking.count(query);
    }


    static async allByDoctorADay(id, date) {
        return await Booking.findAll({
            where: {
                day: date,
                doctorId: id
            },
            include: [
                {
                    model: Patient,
                    include: [{ model: User }]
                },
                {
                    model: Doctor,
                    include: [{ model: User }, { model: Hospital }, { model: Specialty }]
                }
            ],
            order: [
                ['day', 'DESC'],
                ['time', 'DESC']
            ]
        });
    }

    static async allDoctorInPage(id, startTime = null, endTime = null, page = 0, search = null, status = []) {
        const limit = 5;
        const offset = page * limit;

        const where = { doctorId: id };
        const pWhere = {};

        if (startTime || endTime) {
            if (startTime && endTime) {
                const [from, to] = startTime <= endTime ? [startTime, endTime] : [endTime, startTime];
                where.day = from === to ? from : { [Op.between]: [from, to] };
            } else {
                where.day = startTime ? { [Op.gte]: startTime } : { [Op.lte]: endTime };
            }
        }

        if (search) pWhere.name = { [Op.like]: `%${search}%` };
        if (status.length) where.status = { [Op.in]: status };

        const result = await Booking.findAndCountAll({
            where,
            limit,
            offset,
            include: [
                { model: Patient, where: pWhere, include: [{ model: User }] },
                { model: Doctor, include: [{ model: User }, { model: Hospital }, { model: Specialty }] }
            ],
            order: [['day', 'DESC'], ['time', 'DESC']]
        });

        return { data: result.rows, total: result.count };
    }


    static async allByPatinetADay(id, date) {
        return await Booking.findAll({
            where: {
                day: date,
                patientId: id
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
            ],
            order: [
                ['day', 'DESC'],
                ['time', 'ASC']
            ]
        });
    }

    static async allByDoctorFromTo(id, startTime = null, endTime = null) {
        const whereClause = {
            doctorId: id
        };

        // Thêm điều kiện theo thời gian nếu có
        if (startTime && endTime) {
            whereClause.day = {
                [Op.between]: [startTime, endTime]
            };
        } else if (startTime) {
            whereClause.day = {
                [Op.gte]: startTime
            };
        } else if (endTime) {
            whereClause.day = {
                [Op.lte]: endTime
            };
        }

        return await Booking.findAll({
            where: whereClause,
            include: [
                {
                    model: Patient,
                    include: [{ model: User }]
                },
                {
                    model: Doctor,
                    include: [{ model: User }, { model: Hospital }]
                }
            ],
            order: [
                ['day', 'DESC'],
                ['time', 'ASC']
            ]
        });
    }

    static async allByPatientFromTo(id, startTime = null, endTime = null, status = []) {
        const whereClause = {
            patientId: id
        };

        // Thêm điều kiện theo thời gian nếu có
        if (startTime && endTime) {
            whereClause.day = {
                [Op.between]: [startTime, endTime]
            };
        } else if (startTime) {
            whereClause.day = {
                [Op.gte]: startTime
            };
        } else if (endTime) {
            whereClause.day = {
                [Op.lte]: endTime
            };
        }
        if (status.length > 0) {
            whereClause.status = {
                [Op.in]: status
            };
        }

        return await Booking.findAll({
            where: whereClause,
            include: [
                {
                    model: Patient,
                    include: [{ model: User }]
                },
                {
                    model: Doctor,
                    include: [{ model: User }, { model: Hospital }, { model: Specialty }]
                }
            ],
            order: [
                ['day', 'DESC'],
                ['time', 'ASC']
            ]
        });
    }


    static async one(id) {
        return await Booking.findOne({
            where: { id: id },
            include: [
                {
                    model: Doctor,
                    include: [{ model: Hospital }, { model: Specialty }]
                },
                {
                    model: Patient,
                }
            ],
        });
    }
    static async historyPatient(id) {
        const today = new Date().toISOString().split("T")[0];

        return await Booking.findAll({
            where: {
                patientId: id,
                status: "completed",
                day: {
                    [Op.lte]: today
                }
            },
            include: [
                {
                    model: Doctor,
                    include: [{ model: Hospital }]
                }
            ],
            order: [
                ['day', 'DESC'],
                ['time', 'ASC']
            ]
        });
    }

    static async allByPatient(id) {
        return await Booking.findAll({ where: { patientId: id } })
    }
    static async haveBooking(doctorId, patientId) {
        return await Booking.findAll({
            where: {
                patientId: patientId,
                doctorId: doctorId,
                status: "completed",
            }
        })
    }
    static async allByDoctor(id) {
        return await Booking.findAll({ where: { doctorId: id } })
    }
    static async up(data) {
        return await Booking.create(data)
    }
    static async down(id) {
        return await Booking.destroy({ where: { id: id } })
    }
    static async edit(id, data) {
        return await Booking.update(data, { where: { id: id } })
    }
    static async allByDidADate(id, date) {
        return await Booking.findAll({
            where: { doctorId: id, day: date }, include: [
                {
                    model: Patient,
                }
            ]
        });
    }

}

module.exports = BookingSV;
