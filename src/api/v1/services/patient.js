const Patient = require("../models/patient");

class PatientSV {
    static async all() {
        return Patient.findAll();
    }
    static async oneId(id) {
        return Patient.findByPk(id);
    }
     static async oneUId(id) {
        return Patient.findOne({where: {userId: id}});
    }
    static async up(data) {
        return Patient.create(data);
    }

    static async edit(id, data) {
        return Patient.update(data, { where: { id } });
    }

    static async down(id) {
        return Patient.destroy({ where: { id } });
    }
}

module.exports = PatientSV;
