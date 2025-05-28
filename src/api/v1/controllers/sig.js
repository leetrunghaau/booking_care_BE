const { createLongToken } = require("../helpers/jwt");
const { resOk, resErr } = require("../helpers/utils");
const AccountSV = require("../services/account");
const DoctorSV = require("../services/doctor");
const UserSV = require("../services/user");
const createError = require("http-errors");

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
            // const check = await comparePasswords(input.pass, acc.pass)
            const check = input.password == acc.pass

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
            const checkEmail =  await UserSV.oneEmail(input.email);
            if (checkEmail){
                resOk(res, null, "Email đã được đăng ký!")
                return
            }
            const user =  await UserSV.up({})
            // tạo acc
            // tạo patient


            resOk(res, null);
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
                rs = await DoctorSV.onByUId(req.user.id)
            }
            if (req.user.role == "patient") {
                rs = await DoctorSV.onByUId(req.user.id)
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
}
module.exports = Sig