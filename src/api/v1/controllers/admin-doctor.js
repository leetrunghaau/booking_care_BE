const createError = require("http-errors");
const { resOk } = require("../helpers/utils");

class AdminDoctors {
  static async getAvailableDoctors(req, res, next) {
    try {
      const rs = [
        {
          id: "1",
          name: "TS. BS. Nguyễn Văn A",
          specialty: "Tim mạch",
          hospital: "Bệnh viện Đa khoa Trung ương",
          experience: "15 năm",
          appointments: 245,
          rating: 4.9,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "2",
          name: "PGS. TS. Trần Thị B",
          specialty: "Nhi khoa",
          hospital: "Bệnh viện Nhi Trung ương",
          experience: "12 năm",
          appointments: 198,
          rating: 4.8,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "3",
          name: "BS. CKI. Lê Văn C",
          specialty: "Da liễu",
          hospital: "Bệnh viện Da liễu Trung ương",
          experience: "8 năm",
          appointments: 156,
          rating: 4.7,
          status: "inactive",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "4",
          name: "BS. CKII. Phạm Thị D",
          specialty: "Thần kinh",
          hospital: "Bệnh viện Bạch Mai",
          experience: "10 năm",
          appointments: 187,
          rating: 4.6,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "5",
          name: "TS. BS. Hoàng Văn E",
          specialty: "Nội tiết",
          hospital: "Bệnh viện Việt Đức",
          experience: "14 năm",
          appointments: 210,
          rating: 4.5,
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
  static async getPendingDoctors(req, res, next) {
    try {
      const rs = [
        {
          id: "P1",
          name: "BS. Nguyễn Văn X",
          specialty: "Tim mạch",
          hospital: "Bệnh viện Đa khoa Tỉnh",
          experience: "8 năm",
          registeredDate: "15/04/2023",
          documents: 5,
          status: "pending",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "P2",
          name: "BS. Trần Thị Y",
          specialty: "Nhi khoa",
          hospital: "Bệnh viện Nhi Đồng",
          experience: "6 năm",
          registeredDate: "20/04/2023",
          documents: 4,
          status: "pending",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "P3",
          name: "BS. Lê Văn Z",
          specialty: "Da liễu",
          hospital: "Bệnh viện Da liễu",
          experience: "5 năm",
          registeredDate: "25/04/2023",
          documents: 6,
          status: "pending",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "P4",
          name: "BS. Phạm Thị K",
          specialty: "Thần kinh",
          hospital: "Bệnh viện Đa khoa",
          experience: "7 năm",
          registeredDate: "28/04/2023",
          documents: 5,
          status: "pending",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "P5",
          name: "BS. Hoàng Văn M",
          specialty: "Nội tiết",
          hospital: "Bệnh viện Đa khoa",
          experience: "9 năm",
          registeredDate: "30/04/2023",
          documents: 7,
          status: "pending",
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
module.exports = AdminDoctors;
