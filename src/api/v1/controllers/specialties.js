const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
class Specialties {
    static async all(req, res, next) {
        try {
            const rs = [
                {
                    name: "Thần kinh",
                    slug: "than-kinh",
                    description: "Chẩn đoán & điều trị các bệnh về hệ thần kinh",
                    icon: "Brain",
                },
                {
                    name: "Tim mạch",
                    slug: "tim-mach",
                    description: "Theo dõi, điều trị bệnh lý tim, huyết áp, mạch máu",
                    icon: "Heart"
                },
                {
                    name: "Mắt",
                    slug: "mat",
                    description: "Kiểm tra thị lực, đục thủy tinh thể, cận viễn loạn",
                    icon: "Eye"
                },
                {
                    name: "Cơ xương khớp",
                    slug: "co-xuong-khop",
                    description: "Đau lưng, khớp gối, loãng xương và phục hồi chức năng",
                    icon: "Bone"
                },
                {
                    name: "Nhi khoa",
                    slug: "nhi-khoa",
                    description: "Chăm sóc sức khỏe toàn diện cho trẻ nhỏ",
                    icon: "Baby"
                },
                {
                    name: "Tai mũi họng",
                    slug: "tai-mui-hong",
                    description: "Điều trị viêm họng, viêm xoang, dị ứng thời tiết",
                    icon: "Stethoscope"
                },
            ]
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async oneBySlug(req, res, next) {
        try {
            const rs = {
                id: 1,
                name: "Thần kinh",
                icon: "Brain",
                description:
                    "Chuyên khoa Thần kinh tập trung vào các bệnh liên quan đến não, tủy sống và hệ thần kinh. Đây là lĩnh vực có tính chuyên môn cao, yêu cầu thiết bị hiện đại và đội ngũ bác sĩ nhiều kinh nghiệm.",
                banner: "/placeholder.svg",
                commonDiseases: [
                    { name: "Đột quỵ", image: "/placeholder.svg" },
                    { name: "Động kinh", image: "/placeholder.svg" },
                    { name: "Parkinson", image: "/placeholder.svg" },
                    { name: "Rối loạn lo âu", image: "/placeholder.svg" },
                    { name: "Rối loạn tiền đình", image: "/placeholder.svg" },
                ],
                advantages: [
                    "Hỗ trợ chẩn đoán nhanh chóng",
                    "Kết nối với chuyên gia đầu ngành",
                    "Tiết kiệm thời gian điều trị",
                    "Thiết bị công nghệ cao",
                ],
                doctors: [
                    {
                        name: "BS. Nguyễn Văn A",
                        title: "Chuyên gia Thần kinh - BV Bạch Mai",
                        image: "/placeholder.svg",
                        rating: 5,
                        reviews: 122,
                    },
                    {
                        name: "BS. Trần Thị B",
                        title: "Phó khoa Thần kinh - BV 108",
                        image: "/placeholder.svg",
                        rating: 4,
                        reviews: 98,
                    },
                ],
                facilities: [
                    {
                        name: "Bệnh viện Bạch Mai",
                        location: "78 Giải Phóng, Đống Đa, Hà Nội",
                        image: "/images/facilities/bach-mai.jpg",
                    },
                    {
                        name: "Bệnh viện 108",
                        location: "1 Trần Hưng Đạo, Hai Bà Trưng, Hà Nội",
                        image: "/images/facilities/bv108.jpg",
                    },
                ],
                faqs: [
                    {
                        question: "Khi nào nên khám chuyên khoa Thần kinh?",
                        answer:
                            "Khi bạn có dấu hiệu như đau đầu kéo dài, mất ngủ, chóng mặt, co giật, hoặc cảm giác mất thăng bằng thường xuyên.",
                    },
                    {
                        question: "Khám chuyên khoa cần chuẩn bị gì?",
                        answer:
                            "Mang theo hồ sơ bệnh án (nếu có), danh sách thuốc đang dùng và ghi lại triệu chứng chi tiết.",
                    },
                ],
            }
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Specialties;
