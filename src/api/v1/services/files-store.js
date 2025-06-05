const FileStore = require("../models/files-store")

class FileStoreSV {
    static async all() {
       
        return await FileStore.findAll()
    }

    static async one(id) {
        return await FileStore.findByPk(id)
    }
    static async oneRecordId(id) {
        return await FileStore.findOne({where:{medicalRecordId: id}})
    }
    static async allRecord(id) {
        return await FileStore.findAll({where:{medicalRecordId: id}})
    }

    static async up(data) {
        return await FileStore.create(data)
    }
    static async edit(id, data) {
        return await FileStore.update(data, {where: {id:id}})
    }

    static async down(id) {
        return await FileStore.destroy({ where: { id: id } })
    }

}

module.exports = FileStoreSV;


