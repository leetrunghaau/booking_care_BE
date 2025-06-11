const { createLongToken, createEmailToken } = require("../helpers/jwt");
const { resOk, resErr } = require("../helpers/utils");
const AccountSV = require("../services/account");
const DoctorSV = require("../services/doctor");
const PatientSV = require("../services/patient");
const UserSV = require("../services/user");
const createError = require("http-errors");
const { hashPassword, comparePasswords } = require("../../v1/helpers/password-crypt");
const { sendResetPasswordEmail } = require("../helpers/mailer");
const jwt = require('jsonwebtoken');
const jwtConfig = require("../../config/jwt-config");
const AdminSV = require("../services/admin");

class Sig {

    static async login(req, res, next) {
        try {
            const input = req.body
            const user = await UserSV.oneEmail(input.email)
            console.log("user ", user)
            if (!user) {
                resOk(res, null, "Email không tồn tại")
                return;
            }

            if (user.isLock) {
                resOk(res, null, "Tài khoảng đã bị khóa, vui lòng liên hệ tới admin để hổ trợ kỹ thuật")
                return;

            }
            const acc = await AccountSV.oneByUId(user.id)
            if (!acc) {
                resOk(res, null, "Lỗi hệ thống")
                return;
            }
            const check = await comparePasswords(input.password, acc.pass)
            // const check = input.password == acc.pass

            if (!check) {

                return next(createError.Unauthorized("Mật khẩu không đúng"));
            }
            const token = await createLongToken(user.id)
            resOk(res, {
                id: user.id,
                token: token,
                role: user.role
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async sigUp(req, res, next) {
        try {
            const input = req.body

            //tạo user
            const checkEmail = await UserSV.oneEmail(input.email);
            if (checkEmail) {
                resOk(res, null, "Email đã được đăng ký!")
                return
            }

            const user = await UserSV.up({ email: input.email, isLock: false })
            const pass = await hashPassword(input.password)
            const acc = await AccountSV.up({ userId: user.id, pass: pass })
            const patient = await PatientSV.oneEmail(input.email)
            if (patient) {
                await PatientSV.edit(patient.id, { name: input.fullName, phone: input.phone, userId: user.id })
            } else {
                const newPatient = await PatientSV.up({ name: input.fullName, phone: input.phone, userId: user.id })
                await PatientSV.edit(newPatient.id, { code: `BN-${newPatient.id.toString().padStart(6, '0')}` })
            }

            resOk(res, true);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async info(req, res, next) {
        try {
            let rs = null
            if (req.user.role == "doctor") {
                rs = await DoctorSV.onByUId(req.user.id)
            } else if (req.user.role == "admin") {
                rs = await AdminSV.oneUId(req.user.id)
            }
            if (req.user.role == "patient") {
                rs = await PatientSV.oneUId(req.user.id)
            }

            if (!rs) {
                resOk(res, rs, "Không có thông tin về tài khoản");
                return;
            }

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async forgotPass(req, res, next) {
        try {
            let input = req.body
            const user = await UserSV.oneEmail(input.email)
            if (!user) {
                resOk(res, rs, "Email chưa được đăng ký");
                return;
            }
            const token = await createEmailToken(user.id)
            sendResetPasswordEmail(user.email, token)
            console.log("============ reset mail==================")
            console.log("input reset mail", input)
            console.log("tokent", token)

            resOk(res, null);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async newPass(req, res, next) {
        try {
            let input = req.body // token pass
            const payload = jwt.verify(input.token, jwtConfig.sortKey);
            console.log("payload", payload)
            const userId = payload.userId
            const user = await UserSV.one(userId)

            if (!user) {
                resOk(res, null, "Email không có trong hệ thống")
                return
            }
            const acc = await AccountSV.oneByUId(user.id)
            if (!acc) {
                resOk(res, null, "Lỗi hệ thống")
                return
            }
            const pass = await hashPassword(input.pass)
            const check = await AccountSV.edit(acc.id, { pass: pass })
            if (!check) {
                resOk(res, null, "Không lỗi được mật khẩu")
                return
            }
            resOk(res, null);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = Sig