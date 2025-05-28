const User = require("../models/user");

class UserSV {
    static async all() {
        return User.findAll();
    }

    static async oneId(id) {
        return User.findByPk(id);
    }
    static async oneEmail(email) {
        return User.findOne({ where: { email: email } });
    }

    static async up(data) {
        return User.create(data);
    }

    static async edit(id, data) {
        return User.update(data, { where: { id } });
    }

    static async down(id) {
        return User.destroy({ where: { id } });
    }
}

module.exports = UserSV;
