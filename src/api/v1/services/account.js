const Account = require("../models/account");

class AccountSV {
    static async all() {
        return await  Account.findAll();
    }
    static async oneByUId(id) {
        return await  Account.findOne({ where: { userId: id } });
    }
    static async up(data) {
        return await  Account.create(data);
    }
    static async down(id) {
        return await Account.destroy({ where: { id } });
    }
    static async edit(id, data) {
        return await  Account.update(data, { where: { id } });
    }
}

module.exports = AccountSV;
