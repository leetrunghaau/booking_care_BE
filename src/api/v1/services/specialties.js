const { Op } = require("sequelize");
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const HospitalSpecialty = require("../models/hospital-specialties");
const Specialty = require("../models/specialty");

class SpecialtiesSV {

    static async all(ids = []) {
        if (ids.length > 0 ) return await Specialty.findAll({ where: { id: ids } });
        return await Specialty.findAll();
    }
    static async allInPage(page = 0, search = null) {
        const limit = 9;
        const offset = page * limit;

        const where = {};

        if (search) {
            where.name = {
                [Op.like]: `%${search}%`
            };
        }

        const { count, rows } = await Specialty.findAndCountAll({
            where,
            limit,
            offset,
        });

        return {
            data: rows,
            total: count,
        };
    }
   
    static async oneBySlug(slug) {
        return await Specialty.findOne({
            where: { slug: slug }
        });
    }
     static async one(id) {
        return await Specialty.findByPk(id)
    }

    // static async doctors(id) {
    //     return await Doctor.findAll({
    //         where: { specialtyId: id },
    //         include: [
    //             { model: Specialty }
    //         ]
    //     });
    // }

    // static async hospitals(ids) {
    //     return await Hospital.findAll({
    //         where: { id: ids }
    //     });
    // }
    // static async hospitalIds(id) {
    //     return await HospitalSpecialty.findAll({
    //         where: { specialtyId: id },
    //         attributes: ['id']
    //     });
    // }
}

module.exports = SpecialtiesSV;
