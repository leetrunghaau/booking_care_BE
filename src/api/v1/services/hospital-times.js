const HospitalTime = require("../models/hospital-times");

class HospitalTimeSV {
    static async all() {
        return await HospitalTime.findAll()
    }
    static async hospital(hospitalId) {
        return await HospitalTime.findAll({where: {hospitalId: hospitalId}})
    }

    static async one(id) {
        return await HospitalTime.findByPk(id)
    }

    static async up(data) {
        return await HospitalTime.create(data)
    }

    static async ups(dataArray) {
        return await HospitalTime.bulkCreate(dataArray);
    }

    static async down(id) {
        return await HospitalTime.destroy({ where: { id: id } })
    }

}

module.exports = HospitalTimeSV;