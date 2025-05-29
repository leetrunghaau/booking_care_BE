const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Specialty = require("../models/specialty");
const { Op } = require('sequelize');

class DoctorSV {
    static async all() {
        return await Doctor.findAll({ include: [{ model: Hospital }, { model: Specialty }] });
    }
 static async allPid(ids) {
    return await Doctor.findAll({
        include: [
            { model: Hospital },
            {
                model: Specialty,
                where: {
                    id: Array.isArray(ids)
                        ? { [Op.in]: ids }
                        : ids 
                }
            }
        ]
    });
}
    
    static async oneBySlug(slug) {
        return await Doctor.findOne({ where: { slug: slug }, include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async one(id) {
        return await Doctor.findOne({ where: { id: id }, include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async onByUId(id) {
        return await Doctor.findOne({ where: { userId: id }, include: [{ model: Hospital }, { model: Specialty }] });
    }
}


module.exports = DoctorSV;
