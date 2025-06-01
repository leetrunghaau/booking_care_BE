const DoctorAnalysis = require("../models/doctor-analyses")

class DoctorAnalysisSV {
    static async all() {
       
        return await DoctorAnalysis.findAll()
    }

    static async one(id) {
        return await DoctorAnalysis.findByPk(id)
    }

    static async doctor(id) {
        return await DoctorAnalysis.findAll({where:{ doctorId: id }})
    }

    static async up(data) {
        return await DoctorAnalysis.create(data)
    }
    static async edit(id, data) {
        return await DoctorAnalysis.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await DoctorAnalysis.destroy({ where: { id: id } })
    }

}

module.exports = DoctorAnalysisSV;

