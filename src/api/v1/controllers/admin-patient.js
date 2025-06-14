const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const HospitalSV = require("../services/hospital");
const { formatPhoneNumber } = require("../helpers/num");
const PatientSV = require("../services/patient");
const { getVNGender } = require("../helpers/text");
const moment = require("moment");
const UserSV = require("../services/user");
const AccountSV = require("../services/account");
const { hashPassword } = require("../helpers/password-crypt");
require('moment/locale/vi');
moment.locale('vi');

class AdminPatient {

  static async getPatinents(req, res, next) {
    try {
      let { page, search } = req.query
      page = page ? page - 1 : 0
      const data = await PatientSV.allInPage(page, search)
      const patients = data.data.map(i => ({
        id: i.id,
        name: i.name,
        code: i.code,
        gender: getVNGender(i.gender),
        dob: i.dob ? moment(i.dob).format("DD-MM-YYYY") : '-',
        email: i.user?.email ?? i.email ?? "không có thông tin",
        img: i.img,
        phone: formatPhoneNumber(i.phone),
        address: i.address ?? "không có thông tin"
      }))
      resOk(res, {
        patients: patients,
        page: page + 1,
        totalPages: Math.ceil(data.total / 5),
        total: data.total,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async hotRePass(req, res, next) {
    try {
      const id = Number(req.params.id);
      const newPass = req.body.pass;
      if (!id || id <= 0) {
        return resOk(res, { status: false, mess: "ID bệnh nhân không hợp lệ" });
      }
      if (!newPass || typeof newPass !== 'string' || newPass.length < 6) {
        return resOk(res, { status: false, mess: "Mật khẩu phải có ít nhất 6 ký tự" });
      }
      const patient = await PatientSV.one(id);
      if (!patient || !patient.userId) {
        return resOk(res, { status: false, mess: "Tài khoản chưa đăng ký đăng nhập" });
      }
      const user = await UserSV.one(patient.userId);
      if (!user) {
        return resOk(res, { status: false, mess: "Không tìm thấy người dùng" });
      }
      const acc = await AccountSV.oneByUId(user.id);
      if (!acc) {
        return resOk(res, { status: false, mess: "Không tìm thấy tài khoản để cập nhật mật khẩu" });
      }
      const passEncode = await hashPassword(newPass);
      const newAcc = await AccountSV.edit(acc.id, { pass: passEncode });
      if (!newAcc) {
        return resOk(res, { status: false, mess: "Đổi mật khẩu không thành công, vui lòng thử lại" });
      }
      return resOk(res, { status: true, mess: "Đổi mật khẩu thành công" });

    } catch (error) {
      console.error("Lỗi hotRePass:", error);
      return next(createError.InternalServerError());
    }
  }


}
module.exports = AdminPatient;
