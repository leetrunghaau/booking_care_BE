const Doctor = require("../models/doctor");
const Hospital = require("../models/hospital");
const Rating = require("../models/rating");
const Specialty = require("../models/specialty");



class HomeSV {

    static async specialties() {
        return Specialty.findAll({
            attributes: ['id', 'icon', 'name', 'slug'],
            limit: 6
        });
    }


    static async doctors() {
        return Doctor.findAll({
            limit: 4,
            include: [
                { model: Specialty },
                { model: Hospital },
            ]

        });
    }

}

module.exports = HomeSV;
