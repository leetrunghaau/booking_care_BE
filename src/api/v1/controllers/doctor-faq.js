const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const moment = require("moment");
require('moment/locale/vi');
moment.locale('vi');

class DoctorFAQ {
  static async getAllFAQ(req, res, next) {
    try {
      const rs = [
        {
          id: 1,
          patient: {
            name: "Nguyễn Văn A",
            age: 32,
            gender: "Nam",
            phone: "0901234567",
          },
          question: "Bác sĩ có chuyên môn gì?",
        },
        {
          id: 2,
          patient: {
            name: "Trần Thị B",
            age: 28,
            gender: "Nữ",
            phone: "0912345678",
          },
          question: "Có cần nhịn ăn trước khi xét nghiệm không?",
          answer: "Có, bạn nên nhịn ăn ít nhất 8 tiếng.",
        },
        {
          id: 3,
          patient: {
            name: "Trần Thị B",
            age: 28,
            gender: "Nữ",
            phone: "0912345678",
          },
          question: "Có cần nhịn ăn trước khi xét nghiệm không?",
          answer: "Có, bạn nên nhịn ăn ít nhất 8 tiếng.",
        },
        {
          id: 4,
          patient: {
            name: "Trần Thị B",
            age: 28,
            gender: "Nữ",
            phone: "0912345678",
          },
          question: "Có cần nhịn ăn trước khi xét nghiệm không?",
          answer: "Có, bạn nên nhịn ăn ít nhất 8 tiếng.",
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = DoctorFAQ;
