const Patient = require("../models/patient");

class PatientSV {
    static async all() {
        return await  Patient.findAll();
    }
    static async oneId(id) {
        return await  Patient.findByPk(id);
    }
     static async oneUId(id) {
        return await  Patient.findOne({where: {userId: id}});
    }
    static async up(data) {
        return  await Patient.create(data);
    }

    static async edit(id, data) {
        return  await Patient.update(data, { where: { id } });
    }

    static async down(id) {
        return  await Patient.destroy({ where: { id } });
    }
}

module.exports = PatientSV;
