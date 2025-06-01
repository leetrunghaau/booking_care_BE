const Disease = require("../models/diseases")

class DiseaseSV {
    static async all(ids = [], limit = 0) {
        const query = {};

        if (ids.length > 0) {
            query.where = { id: ids };
        }

        if (limit > 0) {
            query.limit = limit;
        }

        return await Disease.findAll(query);
    }

    static async one(id) {
        return await Disease.findByPk(id)
    }

    static async up(data) {
        return await Disease.create(data)
    }

    static async down(id) {
        return await Disease.destroy({ where: { id: id } })
    }

}

module.exports = DiseaseSV;