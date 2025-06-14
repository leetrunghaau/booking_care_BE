// brandRepository.js

const { Op } = require("sequelize");
const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const HospitalSpecialty = require("../models/hospital-specialties");
const Specialty = require("../models/specialty");


class HospitalSV {

    static async all(ids = []) {
        if (ids.length > 0) return await Hospital.findAll({ where: { id: ids } });
        return await Hospital.findAll();
    }
    static async allInPage(page = 0, limit = 5, search = null, address = null) {
        const offset = page * limit;

        const where = {};

        if (search) {
            where.name = {
                [Op.like]: `%${search}%`
            };
        }
 
        if (address) {
            where.address = {
                [Op.like]: `%${address}%`
            };
        }

        const { count, rows } = await Hospital.findAndCountAll({
            where,
            limit,
            offset,
            // order: [['createdAt', 'DESC']] 
        });

        return {
            data: rows,
            total: count,
        };
    }

    static async onBySlug(slug) {
        return await Hospital.findOne({ where: { slug: slug } })
    }
    static async one(id) {
        return await Hospital.findOne({ where: { id: id } })
    }
     static async up(data) {
        return await Hospital.create(data)
    }
    static async edit(id, data) {
        return await Hospital.update(data,{where:{id: id}})
    }
     static async down(id) {
        return await Hospital.destroy({ where: { id: id } })
    }

    static async doctors(id) {
        return await Doctor.findAll({ where: { hospitalId: id }, include: [{ model: Specialty }] })
    }

    static async specialties(id) {
        const idss = await HospitalSpecialty.findAll({ where: { hospitalId: id } })
        const ids = idss.map(i => i.specialtyId)
        return await Specialty.findAll({ where: { id: ids } })
    }

}

module.exports = HospitalSV;
