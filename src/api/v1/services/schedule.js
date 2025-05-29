const Schedule = require("../models/schedule");

class ScheduleSV {
    static async all() {
        return await  Schedule.findAll();
    }
    static async allDId(id) {
        return await  Schedule.findAll({where:{doctorId: id}});
    }
    static async mainDId(id) {
        return await  Schedule.findOne({where:{doctorId: id, isDefault: true}});
    }
    static async oneDId(id) {
        return await  Schedule.findOne({where:{doctorId: id}});
    }
}

module.exports = ScheduleSV;
