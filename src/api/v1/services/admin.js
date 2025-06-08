const Admin = require("../models/admin")

class AdminSV {
    static async all() {
       
        return await Admin.findAll()
    }

    static async one(id) {
        return await Admin.findByPk(id)
    }
    static async oneUId(id){
        return await Admin.findOne({where:{userId: id}})
    }

    static async up(data) {
        return await Admin.create(data)
    }
    static async edit(id, data) {
        return await Admin.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await Admin.destroy({ where: { id: id } })
    }

}

module.exports = AdminSV;


