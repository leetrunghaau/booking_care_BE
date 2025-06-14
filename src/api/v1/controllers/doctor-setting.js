const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const SpecialtiesSV = require("../services/specialties");
const AccountSV = require("../services/account");
const { comparePasswords, hashPassword } = require("../helpers/password-crypt");
const UserSV = require("../services/user");
const moment = require("moment");
require('moment/locale/vi');
moment.locale('vi');
class DoctorSetting {
    static async rePass(req, res, next) {
        try {
            const doctor = await DoctorSV.onByUId(req.user.id)
            if (!doctor) return resOk(res, null);

            const input = req.body;
            //currentPassword: "",
            // newPassword: "",
            // confirmPassword: "",

            const acc = await AccountSV.oneByUId(req.user.id);
            // if (!acc) return resOk(res, null);
            const check = await comparePasswords(input.currentPassword, acc.pass);
            if (!check) {
                return resOk(res, null);
            }
            const newPass = await hashPassword(input.newPassword);
            const newAcc = await AccountSV.edit(acc.id, { pass: newPass });

            resOk(res, true);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getInfo(req, res, next) {
        try {
            const doctor = await DoctorSV.onByUId(req.user.id)
            if (!doctor) return resOk(res, null);
            resOk(res, {
                fullName: doctor.name ?? "",
                email: req.user.email ?? doctor.email ?? "",
                phone: doctor.phone ?? "",
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async postInfo(req, res, next) {
        try {
            const doctor = await DoctorSV.onByUId(req.user.id)
            if (!doctor) return resOk(res, { data: null, st: "error" });

            const input = req.body;
            //fullName: "",
            // email: "",
            // phone: "",

            if (input.email) {
                const checkEmail = await UserSV.oneEmail(input.email);
                if (checkEmail && checkEmail.email !== req.user.email) {
                    return resOk(res, { data: null, st: "Email đã được đăng ký!" });
                } else {

                    await UserSV.edit(req.user.id, { email: input.email });
                }

            } else {
                return resOk(res, { data: null, st: "Phải có email!" });
            }
            const newDoctor = await DoctorSV.edit(doctor.id, {
                name: input.fullName,
                phone: input.phone,
                email: input.email,
            });
            const doctorRs = await DoctorSV.onByUId(req.user.id);
            if (!doctorRs) return resOk(res, { data: null, st: "lỗi khi lưu!" });
            resOk(res, {
                data: {
                    fullName: doctorRs.name ?? "",
                    email: doctorRs.email ?? "",
                    phone: doctorRs.phone ?? "",
                }
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = DoctorSetting;
