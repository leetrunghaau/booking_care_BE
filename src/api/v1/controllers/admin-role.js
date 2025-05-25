const createError = require("http-errors");
const { resOk } = require("../helpers/utils");

class AdminRoles {
  static async getAllRoles(req, res, next) {
    try {
      const rs = [
        {
          id: 1,
          name: "Super Admin",
          description: "Toàn quyền quản lý hệ thống",
          userCount: 1,
          permissions: ["Tất cả quyền"],
        },
        {
          id: 2,
          name: "CSKH",
          description: "Quản lý hỗ trợ và chăm sóc khách hàng",
          userCount: 5,
          permissions: ["Quản lý hỗ trợ", "Xem người dùng", "Xem lịch hẹn"],
        },
        {
          id: 3,
          name: "Điều phối",
          description: "Quản lý lịch hẹn và điều phối bác sĩ",
          userCount: 3,
          permissions: ["Quản lý lịch hẹn", "Xem bác sĩ", "Xem người dùng"],
        },
        {
          id: 4,
          name: "Kế toán",
          description: "Quản lý thanh toán và hóa đơn",
          userCount: 2,
          permissions: ["Quản lý thanh toán", "Xem báo cáo tài chính"],
        },
        {
          id: 5,
          name: "Marketing",
          description: "Quản lý nội dung và marketing",
          userCount: 2,
          permissions: ["Quản lý nội dung", "Xem thống kê"],
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = AdminRoles;
