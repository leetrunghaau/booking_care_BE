const createError = require('http-errors');
const HospitalSV = require('../services/hospital');
const { resOk } = require('../helpers/utils');
class HospitalCo {
    static async all(req, res, next) {
        try {

            const hospitals = await HospitalSV.all();
            if (!hospitals) {
                return next(createError.NotFound())
            }
            resOk(res, hospitals);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async oneBySlug(req, res, next) {
        try {

            const rs = {
                id: "123",
                name: "Phòng khám Đa khoa An Tâm",
                description:
                    "Phòng khám Đa khoa An Tâm là địa chỉ chăm sóc sức khỏe đáng tin cậy với đội ngũ bác sĩ giàu kinh nghiệm, thiết bị hiện đại và không gian khám chữa bệnh tiện nghi.",
                address: "123 Nguyễn Văn Cừ, Quận 5, TP.HCM",
                phone: "1900 999 888",
                openingHours: "Thứ 2 - Chủ Nhật: 7:00 - 20:00",
                license: "Số 1234/BYT-GPHĐ",
                image: "/placeholder.svg?height=400&width=1200&text=Phòng+khám+An+Tâm",
                mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!....",
                services: [
                    "Khám tổng quát",
                    "Khám chuyên khoa",
                    "Xét nghiệm - Chẩn đoán hình ảnh",
                    "Tư vấn trực tuyến",
                    "Gói khám doanh nghiệp",
                ],
                years: 10,
                patients: 100000,
                doctors: 100,
                rating: 4.9,
            }
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = HospitalCo;
