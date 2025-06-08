const Schedule = require("../models/schedule");

class ScheduleSV {
    static async all() {
        return await Schedule.findAll();
    }
    static async allDId(id) {
        return await Schedule.findAll({ where: { doctorId: id } });
    }
    static async one(id) {
        return await Schedule.findOne({ where: { id: id } });
    }
    static async mainDId(id) {
        return await Schedule.findOne({ where: { doctorId: id, isDefault: true } });
    }
    static async template(id) {
        return await Schedule.findAll({ where: { doctorId: id, isDefault: false } });
    }
    static async up(data) {
        return await Schedule.create(data);
    }
    static async edit(id, data) {
        return await Schedule.update(data, { where: { id: id } });
    }
    static async oneDId(id) {
        return await Schedule.findOne({ where: { doctorId: id } });
    }
    static async down(id) {
        return await Schedule.destroy({ where: { id: id } });
    }
}

module.exports = ScheduleSV;
