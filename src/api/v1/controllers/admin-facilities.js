const createError = require("http-errors");
const { resOk } = require("../helpers/utils");

class AdminFacilities {
  static async getAllFacilities(req, res, next) {
    try {
      const rs = [
        {
          id: "123",
          name: "Phòng khám Đa khoa An Tâm",
          address: "123 Nguyễn Văn Cừ, Quận 5, TP.HCM",
          phone: "1900 999 888",
          status: "active",
          updatedAt: "Hôm nay",
        },
        {
          id: "456",
          name: "Bệnh viện Quốc tế Việt Đức",
          address: "456 Lê Hồng Phong, Quận 10, TP.HCM",
          phone: "1800 888 777",
          status: "active",
          updatedAt: "Hôm qua",
        },
        {
          id: "789",
          name: "Phòng khám Chuyên khoa Mắt Sáng Tươi",
          address: "789 Trần Hưng Đạo, Quận 1, TP.HCM",
          phone: "1900 777 666",
          status: "pending",
          updatedAt: "3 ngày trước",
        },
        {
          id: "101",
          name: "Phòng khám Nha khoa Răng Khỏe",
          address: "101 Nguyễn Thị Minh Khai, Quận 3, TP.HCM",
          phone: "1800 666 555",
          status: "active",
          updatedAt: "1 tuần trước",
        },
        {
          id: "202",
          name: "Trung tâm Y tế Quận 2",
          address: "202 Mai Chí Thọ, Quận 2, TP.HCM",
          phone: "1900 555 444",
          status: "inactive",
          updatedAt: "2 tuần trước",
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getFacilityById(req, res, next) {
    const { id } = req.params;

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
        specialties: [
          "Nội tổng quát",
          "Sản phụ khoa",
          "Nhi khoa",
          "Tai mũi họng",
          "Da liễu",
          "Tim mạch",
        ],
        doctors: [
          {
            name: "BS. Nguyễn Văn A",
            specialty: "Nội tổng quát",
            image: "/placeholder.svg?height=300&width=300&text=BS+A",
          },
          {
            name: "TS.BS. Trần Thị B",
            specialty: "Sản phụ khoa",
            image: "/placeholder.svg?height=300&width=300&text=BS+B",
          },
        ],
        gallery: [
          "/placeholder.svg?height=300&width=400&text=Hình+1",
          "/placeholder.svg?height=300&width=400&text=Hình+2",
          "/placeholder.svg?height=300&width=400&text=Hình+3",
        ],
        stats: {
          years: 10,
          patients: 100000,
          doctors: 100,
          rating: 4.9,
        },
        status: "active",
      };

      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = AdminFacilities;
