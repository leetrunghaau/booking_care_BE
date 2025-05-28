const { resOk, resErr } = require("../helpers/utils")

const errorMiddleware = async (err, req, res, next) => {
    // res.status(err.status || 500).json({
    //     status: err.status || 500,
    //     message: err.message
    // })
    resErr(res, 200, err.message || "Đã có lỗi");
    return
}
module.exports = {
    errorMiddleware
}