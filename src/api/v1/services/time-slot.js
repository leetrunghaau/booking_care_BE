const TimeSlot = require("../models/time-slot")

class TimeSlotSV {
    static async all() {
       
        return await TimeSlot.findAll()
    }
    static async allByDId(doctorId) {
        return await TimeSlot.findAll({ where: { doctorId: doctorId } })
    }
    static async allByDIdAndDate(doctorId, date) {
        return await TimeSlot.findAll({ where: { doctorId: doctorId, date: date } })
    }
    static async one(id) {
        return await TimeSlot.findByPk(id)
    }

    static async up(data) {
        return await TimeSlot.create(data)
    }
    static async edit(id, data) {
        return await TimeSlot.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await TimeSlot.destroy({ where: { id: id } })
    }

}

module.exports = TimeSlotSV;


