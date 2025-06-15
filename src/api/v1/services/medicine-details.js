const { Op } = require("sequelize");
const MedicineDetails = require("../models/medicine-details")

class MedicineDetailsSV {
    static async all() {
       
        return await MedicineDetails.findAll()
    }
    static async search(page = 0, search = null) {
        const limit = 10;
        const offset = page * limit;

        const where = {};

        if (search) {
            where.name = {
                [Op.like]: `%${search}%`
            };
        }
        const { count, rows } = await MedicineDetails.findAndCountAll({
            where,
            limit,
            offset,
           
        });
        return {
            data: rows,
            total: count,
        };
    }
    static async one(id) {
        return await MedicineDetails.findByPk(id)
    }

    static async up(data) {
        return await MedicineDetails.create(data)
    }
    static async edit(id, data) {
        return await MedicineDetails.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await MedicineDetails.destroy({ where: { id: id } })
    }

}

module.exports = MedicineDetailsSV;


