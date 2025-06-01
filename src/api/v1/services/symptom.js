const { Op, Sequelize } = require("sequelize");
const Symptom = require("../models/symptoms")

class SymptomsSV {
    static async all(ids = [], limit = 0, random = false) {
        const query = {};

        if (ids.length > 0) {
            query.where = { id: ids };
        }

        if (limit > 0) {
            query.limit = limit;
        }
        if (random) {
            query.order = Sequelize.literal('RAND()');
        }

        return await Symptom.findAll(query);
    }
    static async allName() {
        return await Symptom.findAll({
            attributes: ['name'],
            group: ['name']
        })
    }
    static async allByName(name) {
        return await Symptom.findAll({
            where: { name: name }
        })
    }
    static async allBySymptoms(symptoms) {

        const whereConditions = symptoms.map(name => ({
            name: {
                [Op.like]: `%${name}%`
            }
        }));

        return await Symptom.findAll({
            where: {
                [Op.or]: whereConditions
            }
        });
    }


    static async one(id) {
        return await Symptom.findByPk(id)
    }

    static async up(data) {
        return await Symptom.create(data)
    }

    static async down(id, att = []) {
        return await Symptom.destroy({ where: { id: id } })
    }

}

module.exports = SymptomsSV;