const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const moment = require("moment");
require('moment/locale/vi');
moment.locale('vi');

class AdminAccount {
  static async getAllAccounts(req, res, next) {
    try {
      const rs = [
        {
          id: 1,
          name: "Nguyễn Văn Admin",
          email: "admin@example.com",
          role: "Super Admin",
          lastActive: "2023-12-15T08:30:00",
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 2,
          name: "Trần Thị Hỗ Trợ",
          email: "support@example.com",
          role: "CSKH",
          lastActive: "2023-12-15T09:15:00",
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 3,
          name: "Lê Văn Điều Phối",
          email: "coordinator@example.com",
          role: "Điều phối",
          lastActive: "2023-12-15T10:00:00",
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 4,
          name: "Phạm Thị Kế Toán",
          email: "finance@example.com",
          role: "Kế toán",
          lastActive: "2023-12-15T11:30:00",
          status: "inactive",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 5,
          name: "Hoàng Văn Marketing",
          email: "marketing@example.com",
          role: "Marketing",
          lastActive: "2023-12-15T13:00:00",
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = AdminAccount;
