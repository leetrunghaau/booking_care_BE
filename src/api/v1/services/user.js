const User = require("../models/user");

class UserSV {
    static async all() {
        return  await User.findAll();
    }

    static async oneId(id) {
        return  await User.findByPk(id);
    }
    static async oneEmail(email) {
        return  await User.findOne({ where: { email: email } });
    }

    static async up(data) {
        return await  User.create(data);
    }

    static async edit(id, data) {
        return await  User.update(data, { where: { id } });
    }

    static async down(id) {
        return await  User.destroy({ where: { id } });
    }
}

module.exports = UserSV;
