const createError = require("http-errors");
const { resOk } = require("../helpers/utils");

class AdminActivities {
  static async getAllActivities(req, res, next) {
    try {
      const rs = [
        {
          id: 1,
          user: {
            name: "Nguyễn Văn Admin",
            email: "admin@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          action: "Đăng nhập",
          target: "Hệ thống",
          timestamp: "2023-12-15T15:30:00",
          ip: "192.168.1.1",
          status: "success",
        },
        {
          id: 2,
          user: {
            name: "Nguyễn Văn Admin",
            email: "admin@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          action: "Cập nhật",
          target: "Thông tin bác sĩ #123",
          timestamp: "2023-12-15T15:35:00",
          ip: "192.168.1.1",
          status: "success",
        },
        {
          id: 3,
          user: {
            name: "Trần Thị Hỗ Trợ",
            email: "support@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          action: "Phản hồi",
          target: "Ticket hỗ trợ #456",
          timestamp: "2023-12-15T15:40:00",
          ip: "192.168.1.2",
          status: "success",
        },
        {
          id: 4,
          user: {
            name: "Lê Văn Điều Phối",
            email: "coordinator@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          action: "Cập nhật",
          target: "Lịch hẹn #789",
          timestamp: "2023-12-15T15:45:00",
          ip: "192.168.1.3",
          status: "success",
        },
        {
          id: 5,
          user: {
            name: "Phạm Thị Kế Toán",
            email: "finance@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          action: "Truy cập",
          target: "Báo cáo tài chính",
          timestamp: "2023-12-15T15:50:00",
          ip: "192.168.1.4",
          status: "warning",
        },
        {
          id: 6,
          user: {
            name: "Hoàng Văn Marketing",
            email: "marketing@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          action: "Đăng nhập",
          target: "Hệ thống",
          timestamp: "2023-12-15T15:55:00",
          ip: "192.168.1.5",
          status: "error",
        },
        {
          id: 7,
          user: {
            name: "Hoàng Văn Marketing",
            email: "marketing@example.com",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          action: "Đăng nhập",
          target: "Hệ thống",
          timestamp: "2023-12-15T16:00:00",
          ip: "192.168.1.5",
          status: "success",
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = AdminActivities;
