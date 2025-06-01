const SpecialtyAdvantages = require("../models/specialty-advantages");

class SpecialtyAdvantagesSV {
    static async all() {

        return await SpecialtyAdvantages.findAll()
    }
    static async specialties(specialtyId) {
        return await SpecialtyAdvantages.findAll({ where: { specialtyId: specialtyId } })
    }
    static async one(id) {
        return await SpecialtyAdvantages.findByPk(id)
    }

    static async up(data) {
        return await SpecialtyAdvantages.create(data)
    }

    static async down(id) {
        return await SpecialtyAdvantages.destroy({ where: { id: id } })
    }

}

module.exports = SpecialtyAdvantagesSV;