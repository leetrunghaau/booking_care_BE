const HospitalImage = require("../models/hospital-images");

class HospitalImageSV {
    static async all() {
        return await HospitalImage.findAll()
    }
    static async hospital(hospitalId) {
        return await HospitalImage.findAll({where: {hospitalId: hospitalId}})
    }

    static async one(id) {
        return await HospitalImage.findByPk(id)
    }

    static async up(data) {
        return await HospitalImage.create(data)
    }
    static async ups(dataArray) {
        return await HospitalImage.bulkCreate(dataArray);
    }
    static async down(id) {
        return await HospitalImage.destroy({ where: { id: id } })
    }

}

module.exports = HospitalImageSV;