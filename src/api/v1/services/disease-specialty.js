const DiseaseSpecialty = require("../models/disease-specialty");

class DiseaseSpecialtySV {
    static async all() {
        return await DiseaseSpecialty.findAll()
    }
    static async disease(specialtyId) {
        return await DiseaseSpecialty.findAll({where: {specialtyId: specialtyId}})
    }
    static async specialties(diseaseId) {
        return await DiseaseSpecialty.findAll({where: {diseaseId: diseaseId}})
    }

    static async one(id) {
        return await DiseaseSpecialty.findByPk(id)
    }

    static async up(data) {
        return await DiseaseSpecialty.create(data)
    }

    static async downByDiseaseId(diseaseId) {
        return await DiseaseSpecialty.destroy({ where: { diseaseId: diseaseId } })
    }

}

module.exports = DiseaseSpecialtySV;