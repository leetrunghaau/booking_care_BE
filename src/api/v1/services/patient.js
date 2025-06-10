const { Op } = require("sequelize");
const Patient = require("../models/patient");
const User = require("../models/user");

class PatientSV {
    static async all() {
        return await Patient.findAll();
    }
        static async allInPage(page = 0, search = null) {
        const limit = 5;
        const offset = page * limit;

        const where = {};

        if (search) {
            where.name = {
                [Op.like]: `%${search}%`
            };
        }

        const { count, rows } = await Patient.findAndCountAll({
            where,
            limit,
            offset,
            include: [{ model: User }]
            // order: [['createdAt', 'DESC']] 
        });

        return {
            data: rows,
            total: count,
        };
    }
    static async one(id) {
        return await Patient.findByPk(id, { include: [{ model: User }] });
    }
    static async oneUId(id) {
        return await Patient.findOne({ where: { userId: id }, include: [{ model: User }] });
    }
    static async oneEmail(email) {
        return await Patient.findOne({ where: { email: email }, include: [{ model: User }] });
    }
    static async up(data) {
        return await Patient.create(data, {include: [{ model: User }]});
    }

    static async edit(id, data) {
        return await Patient.update(data, { where: { id }, include: [{ model: User }] });
    }

    static async down(id) {
        return await Patient.destroy({ where: { id } });
    }
}

module.exports = PatientSV;
