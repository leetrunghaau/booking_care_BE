// brandRepository.js

const Hospital = require("../models/hospital");


class HospitalSV {

    static async all() {
        return Hospital.findAll({attributes:['id', 'name', 'address', 'slug', 'thumbnail']});
    }

}

module.exports = HospitalSV;
