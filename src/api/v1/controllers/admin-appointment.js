const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const moment = require("moment");
require('moment/locale/vi');
moment.locale('vi');
class AdminAppointments {
  static async getAllAppointmentsList(req, res, next) {
    try {
      const rs = [
        {
          id: "A1",
          patient: {
            name: "Nguyễn Văn A",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Trần Thị B",
            specialty: "Tim mạch",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "15/05/2023",
          time: "09:00 - 09:30",
          type: "Khám định kỳ",
          status: "confirmed",
          payment: "Đã thanh toán",
        },
        {
          id: "A2",
          patient: {
            name: "Lê Văn C",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Phạm Thị D",
            specialty: "Nhi khoa",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "15/05/2023",
          time: "10:00 - 10:30",
          type: "Khám lần đầu",
          status: "pending",
          payment: "Chưa thanh toán",
        },
        {
          id: "A3",
          patient: {
            name: "Hoàng Văn E",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Nguyễn Văn F",
            specialty: "Da liễu",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "15/05/2023",
          time: "11:00 - 11:30",
          type: "Tái khám",
          status: "completed",
          payment: "Đã thanh toán",
        },
        {
          id: "A4",
          patient: {
            name: "Trần Thị G",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Lê Văn H",
            specialty: "Thần kinh",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "16/05/2023",
          time: "09:00 - 09:30",
          type: "Khám định kỳ",
          status: "cancelled",
          payment: "Hoàn tiền",
        },
        {
          id: "A5",
          patient: {
            name: "Phạm Văn I",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Hoàng Thị K",
            specialty: "Nội tiết",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          date: "16/05/2023",
          time: "10:00 - 10:30",
          type: "Khám lần đầu",
          status: "confirmed",
          payment: "Đã thanh toán",
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getAllAppointmentsByDay(req, res, next) {
    try {
      const rs = [
        {
          id: "A1",
          time: "09:00 - 09:30",
          patient: {
            name: "Nguyễn Văn A",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Trần Thị B",
            specialty: "Tim mạch",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          status: "confirmed",
        },
        {
          id: "A2",
          time: "10:00 - 10:30",
          patient: {
            name: "Lê Văn C",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Phạm Thị D",
            specialty: "Nhi khoa",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          status: "pending",
        },
        {
          id: "A3",
          time: "11:00 - 11:30",
          patient: {
            name: "Hoàng Văn E",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Nguyễn Văn F",
            specialty: "Da liễu",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          status: "completed",
        },
        {
          id: "A4",
          time: "13:30 - 14:00",
          patient: {
            name: "Trần Thị G",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Lê Văn H",
            specialty: "Thần kinh",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          status: "cancelled",
        },
        {
          id: "A5",
          time: "14:30 - 15:00",
          patient: {
            name: "Phạm Văn I",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          doctor: {
            name: "BS. Hoàng Thị K",
            specialty: "Nội tiết",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          status: "confirmed",
        },
      ];

      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = AdminAppointments;
