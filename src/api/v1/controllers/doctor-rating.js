const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const moment = require("moment");
require('moment/locale/vi');
moment.locale('vi');

class DoctorRating {
  static async getRatingData(req, res, next) {
    try {
      const rs = {
        average: 4.7,
        total: 120,
        distribution: [
          { stars: 5, count: 90 },
          { stars: 4, count: 20 },
          { stars: 3, count: 7 },
          { stars: 2, count: 2 },
          { stars: 1, count: 1 },
        ],
        responseRate: 95,
        trends: {
          all: [4.5, 4.6, 4.7, 4.7, 4.8, 4.7],
          month: [4.6, 4.7, 4.8, 4.7, 4.9, 4.8],
          year: [4.3, 4.4, 4.5, 4.6, 4.7, 4.7],
        },
      };
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = DoctorRating;
