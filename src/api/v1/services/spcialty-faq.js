const SpecialtyFaq = require("../models/specialty-faq");

class SpecialtyFaqSV {
    static async all() {
        return await SpecialtyFaq.findAll()
    }
     static async specialties(specialtyId) {
        return await SpecialtyFaq.findAll({where: {specialtyId: specialtyId}})
    }

    static async one(id) {
        return await SpecialtyFaq.findByPk(id)
    }

    static async up(data) {
        return await SpecialtyFaq.create(data)
    }

    static async down(id) {
        return await SpecialtyFaq.destroy({ where: { id: id } })
    }

}

module.exports = SpecialtyFaqSV;