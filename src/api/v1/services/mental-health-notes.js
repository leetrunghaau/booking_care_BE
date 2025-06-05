const MentalHealthNote = require("../models/mental-health-notes")

class MentalHealthNoteSV {
    static async all() {
       
        return await MentalHealthNote.findAll()
    }

    static async one(id) {
        return await MentalHealthNote.findByPk(id)
    }

    static async up(data) {
        return await MentalHealthNote.create(data)
    }
    static async edit(id, data) {
        return await MentalHealthNote.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await MentalHealthNote.destroy({ where: { id: id } })
    }

}

module.exports = MentalHealthNoteSV;


