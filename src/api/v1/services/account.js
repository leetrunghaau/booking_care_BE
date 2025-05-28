const Account = require("../models/account");

class AccountSV {
    static async all() {
        return Doctor.findAll({ include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async oneByUId(id) {
        return Account.findOne({ where: { userId: id } });
    }
    static async up(data) {
        return Account.create(data);
    }
    static async edit(id, data) {
        return Account.update(data, { where: { id } });
    }
}

module.exports = AccountSV;
