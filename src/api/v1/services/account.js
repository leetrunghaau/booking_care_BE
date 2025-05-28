const Account = require("../models/account");

class AccountSV {
    static async all() {
        return Doctor.findAll({ include: [{ model: Hospital }, { model: Specialty }] });
    }
    static async oneByUId(id) {
        return Account.findOne({ where: { userId: id } });
    }
}

module.exports = AccountSV;
