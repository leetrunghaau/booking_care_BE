const createError = require("http-errors");
const { resOk } = require("../helpers/utils");

class AdminUsers {
  static async getAllUsers(req, res, next) {
    try {
      const rs = [
        {
          id: "1",
          name: "Nguyễn Văn A",
          email: "nguyenvana@example.com",
          phone: "0901234567",
          registeredDate: "15/04/2023",
          lastActive: "Hôm nay",
          appointments: 12,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "2",
          name: "Trần Thị B",
          email: "tranthib@example.com",
          phone: "0912345678",
          registeredDate: "20/05/2023",
          lastActive: "Hôm qua",
          appointments: 8,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "3",
          name: "Lê Văn C",
          email: "levanc@example.com",
          phone: "0923456789",
          registeredDate: "10/06/2023",
          lastActive: "3 ngày trước",
          appointments: 5,
          status: "inactive",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "4",
          name: "Phạm Thị D",
          email: "phamthid@example.com",
          phone: "0934567890",
          registeredDate: "05/07/2023",
          lastActive: "1 tuần trước",
          appointments: 3,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "5",
          name: "Hoàng Văn E",
          email: "hoangvane@example.com",
          phone: "0945678901",
          registeredDate: "18/08/2023",
          lastActive: "2 tuần trước",
          appointments: 0,
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
module.exports = AdminUsers;
