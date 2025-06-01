const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const Rating = require("../models/rating");

class RatingSV {
    static async all() {
        return await  Rating.findAll({ include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async allDId(id) {
        return await  Rating.findAll({ where: { doctorId: id }, include: [{ model: Doctor }, { model: Patient }] });
    }
    static async countDId(id) {
        return await  Rating.count({ where: { doctorId: id } });
    }
    static async up(data) {
        return await  Rating.create(data);
    }
    static async allDIdvsL(id, len) {
  return await Rating.findAll({
    where: { doctorId: id },
    limit: len,
    order: [['createdAt', 'DESC']], // Sắp xếp theo ngày mới nhất
    include: [{ model: Doctor }, { model: Patient }],
  });
}
}

module.exports = RatingSV;
