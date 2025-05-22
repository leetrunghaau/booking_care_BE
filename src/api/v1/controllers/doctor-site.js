const createError = require('http-errors');
// const HospitalSV = require('../services/hospital');
const { resOk } = require('../helpers/utils');
class DoctorSite {
    static async address(req, res, next) {
        try {
            const rs = [
                { slug: "noi-tong-hop", name: "Nội tổng hợp" },
                { slug: "nhi-khoa", name: "Nhi khoa" },
                { slug: "da-lieu", name: "Da liễu" },
                { slug: "rang-ham-mat", name: "Răng - Hàm - Mặt" },
                { slug: "mat", name: "Mắt" },
                { slug: "san-phu-khoa", name: "Sản phụ khoa" },
            ];

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async spesialties(req, res, next) {
        try {
            const rs = [
                { slug: "ha-noi", name: "Hà Nội" },
                { slug: "tp-ho-chi-minh", name: "TP. Hồ Chí Minh" },
                { slug: "da-nang", name: "Đà Nẵng" },
                { slug: "hai-phong", name: "Hải Phòng" },
                { slug: "can-tho", name: "Cần Thơ" },
            ];

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctors(req, res, next) {
        try {
            const rs = [
                {
                    id: "1",
                    name: "BS. Nguyễn Văn A",
                    specialty: "Nội tổng hợp",
                    hospital: "Bệnh viện Bạch Mai",
                    location: "Hà Nội",
                    rating: 4.5,
                    reviewCount: 120,
                    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
                },
                {
                    id: "2",
                    name: "BS. Trần Thị B",
                    specialty: "Nhi khoa",
                    hospital: "Bệnh viện Nhi Trung Ương",
                    location: "Hà Nội",
                    rating: 4.8,
                    reviewCount: 98,
                    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
                },
                {
                    id: "3",
                    name: "BS. Lê Văn C",
                    specialty: "Da liễu",
                    hospital: "Bệnh viện Da Liễu",
                    location: "TP. Hồ Chí Minh",
                    rating: 4.3,
                    reviewCount: 76,
                    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
                },
                {
                    id: "4",
                    name: "BS. Nguyễn Thị D",
                    specialty: "Sản phụ khoa",
                    hospital: "Bệnh viện Từ Dũ",
                    location: "TP. Hồ Chí Minh",
                    rating: 4.9,
                    reviewCount: 210,
                    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
                },
                {
                    id: "5",
                    name: "BS. Phạm Văn E",
                    specialty: "Răng - Hàm - Mặt",
                    hospital: "Bệnh viện RHM Trung Ương",
                    location: "Hà Nội",
                    rating: 4.2,
                    reviewCount: 65,
                    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
                },
                {
                    id: "6",
                    name: "BS. Hồ Thị F",
                    specialty: "Mắt",
                    hospital: "Bệnh viện Mắt Trung Ương",
                    location: "Hà Nội",
                    rating: 4.6,
                    reviewCount: 134,
                    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
                },
                {
                    id: "7",
                    name: "BS. Đỗ Văn G",
                    specialty: "Nội tổng hợp",
                    hospital: "Bệnh viện Trung Ương Huế",
                    location: "Huế",
                    rating: 4.4,
                    reviewCount: 89,
                    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
                },
                {
                    id: "8",
                    name: "BS. Vũ Thị H",
                    specialty: "Nhi khoa",
                    hospital: "Bệnh viện Phụ sản Cần Thơ",
                    location: "Cần Thơ",
                    rating: 4.7,
                    reviewCount: 101,
                    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
                },
                {
                    id: "9",
                    name: "BS. Trịnh Văn I",
                    specialty: "Da liễu",
                    hospital: "Bệnh viện Da Liễu Đà Nẵng",
                    location: "Đà Nẵng",
                    rating: 4.0,
                    reviewCount: 59,
                    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
                },
                {
                    id: "10",
                    name: "BS. Nguyễn Thị J",
                    specialty: "Sản phụ khoa",
                    hospital: "Bệnh viện Phụ sản Hà Nội",
                    location: "Hà Nội",
                    rating: 4.9,
                    reviewCount: 180,
                    imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
                },
            ];
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = DoctorSite;
