const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const moment = require("moment");
require('moment/locale/vi');
moment.locale('vi');

class AdminSpecialty {
  static async getAllSpecialties(req, res, next) {
    try {
      const rs = [
        {
          id: "1",
          name: "Thần kinh",
          slug: "than-kinh",
          doctorsCount: 12,
          diseasesCount: 5,
          status: "active",
          updatedAt: "Hôm nay",
        },
        {
          id: "2",
          name: "Tim mạch",
          slug: "tim-mach",
          doctorsCount: 15,
          diseasesCount: 8,
          status: "active",
          updatedAt: "Hôm qua",
        },
        {
          id: "3",
          name: "Sản phụ khoa",
          slug: "san-phu-khoa",
          doctorsCount: 10,
          diseasesCount: 6,
          status: "active",
          updatedAt: "3 ngày trước",
        },
        {
          id: "4",
          name: "Nhi khoa",
          slug: "nhi-khoa",
          doctorsCount: 8,
          diseasesCount: 12,
          status: "active",
          updatedAt: "1 tuần trước",
        },
        {
          id: "5",
          name: "Da liễu",
          slug: "da-lieu",
          doctorsCount: 6,
          diseasesCount: 9,
          status: "pending",
          updatedAt: "2 tuần trước",
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = AdminSpecialty;
