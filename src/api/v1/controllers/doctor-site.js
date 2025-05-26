const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const DoctorSiteSV = require('../services/doctor-site');
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

    static async all(req, res, next) {
        try {
            const doctors = await DoctorSiteSV.all()
            resOk(res, doctors);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async oneBySlug(req, res, next) {
        try {
            const rs = await DoctorSiteSV.oneBySlug(req.params.slug)
            console.log("slug", req.params.slug)
            console.log("slug", rs)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctorAbout(req, res, next) {
        try {
            const rs = {
                about: "Tiến sĩ, Bác sĩ chuyên khoa II Nguyễn Văn A là chuyên gia đầu ngành về Tim mạch với hơn 15 năm kinh nghiệm. Bác sĩ đã điều trị thành công cho hàng nghìn bệnh nhân mắc các bệnh lý tim mạch phức tạp. Với kiến thức chuyên môn sâu rộng và kỹ năng lâm sàng xuất sắc, bác sĩ luôn được đồng nghiệp và bệnh nhân đánh giá cao về chuyên môn và thái độ phục vụ tận tâm.",
                specializations: ["Bệnh mạch vành", "Rối loạn nhịp tim", "Suy tim", "Tăng huyết áp", "Bệnh van tim"],
                education: [
                    {
                        degree: "Tiến sĩ Y khoa",
                        school: "Đại học Y Hà Nội",
                        year: "2010",
                    },
                    {
                        degree: "Bác sĩ Chuyên khoa II",
                        school: "Đại học Y Hà Nội",
                        year: "2005",
                    },
                    {
                        degree: "Bác sĩ Chuyên khoa I",
                        school: "Đại học Y Hà Nội",
                        year: "2000",
                    },
                ],
                awards: [
                    {
                        title: "Thầy thuốc ưu tú",
                        year: "2018",
                    },
                    {
                        title: "Bác sĩ xuất sắc Bệnh viện Đại học Y Hà Nội",
                        year: "2015",
                    },
                ],
                publications: [
                    {
                        title: "Nghiên cứu về tác động của chế độ ăn đến bệnh tim mạch ở người Việt Nam",
                        journal: "Tạp chí Y học Việt Nam",
                        year: "2019",
                    },
                    {
                        title: "Đánh giá hiệu quả điều trị tăng huyết áp bằng phương pháp kết hợp",
                        journal: "Tạp chí Tim mạch học Việt Nam",
                        year: "2017",
                    },
                ]
            }

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctorExperience(req, res, next) {
        try {
            const rs = {

                details: [
                    {
                        position: "Trưởng khoa Tim mạch",
                        hospital: "Bệnh viện Đại học Y Hà Nội",
                        period: "2015 - Hiện tại",
                    },
                    {
                        position: "Phó khoa Tim mạch",
                        hospital: "Bệnh viện Đại học Y Hà Nội",
                        period: "2010 - 2015",
                    },
                    {
                        position: "Bác sĩ điều trị",
                        hospital: "Bệnh viện Bạch Mai",
                        period: "2005 - 2010",
                    },
                ],
                languages: ["Tiếng Việt", "Tiếng Anh"]

            }

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctorReview(req, res, next) {
        try {
            const rs = {
                ratingDistribution:
                    [{ stars: 5, percentage: 75 },
                    { stars: 4, percentage: 15 },
                    { stars: 3, percentage: 7 },
                    { stars: 2, percentage: 2 },
                    { stars: 1, percentage: 1 },],
                avgRating: 4.7,
                sumRating: 135,
                reviews: [
                    {
                        id: "1",
                        name: "Nguyễn Thị B",
                        date: "15/04/2023",
                        rating: 5,
                        comment:
                            "Bác sĩ rất tận tâm và chuyên nghiệp. Tôi đã được tư vấn rất chi tiết về tình trạng bệnh và phương pháp điều trị. Cảm ơn bác sĩ rất nhiều!",
                        likes: 12,
                        replies: 1,
                    },
                    {
                        id: "2",
                        name: "Trần Văn C",
                        date: "03/03/2023",
                        rating: 4,
                        comment: "Bác sĩ khám rất kỹ và giải thích rõ ràng. Tuy nhiên thời gian chờ đợi hơi lâu.",
                        likes: 5,
                        replies: 0,
                    },
                    {
                        id: "3",
                        name: "Lê Thị D",
                        date: "22/02/2023",
                        rating: 5,
                        comment:
                            "Tôi rất hài lòng với dịch vụ. Bác sĩ rất chuyên nghiệp và thân thiện. Sẽ quay lại khám trong tương lai.",
                        likes: 8,
                        replies: 2,
                    },
                ]
            }

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctorRating(req, res, next) {
        try {
            resOk(res, req.body);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctorFaqs(req, res, next) {
        try {
            const rs = [
                {
                    question: "Làm sao để đặt lịch hẹn với bác sĩ?",
                    answer: "Bạn có thể nhấn vào nút 'Đặt câu hỏi' và điền thông tin cần thiết.",
                },
                {
                    question: "Bác sĩ có làm việc cuối tuần không?",
                    answer: "Một số bác sĩ có làm việc vào cuối tuần. Vui lòng kiểm tra lịch cụ thể.",
                },
                {
                    question: "Tôi có thể hủy lịch hẹn không?",
                    answer: "Bạn có thể hủy lịch hẹn trước 24 giờ mà không bị mất phí.",
                },
            ]
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctorHospital(req, res, next) {
        try {
            const rs = {
                id: 1,
                name: "Bệnh viện Nhân Dân Gia Định",
                address: "Số 1 Nơ Trang Long, Phường 7, Quận Bình Thạnh, TP.HCM",
                img: "https://example.com/images/bv-gia-dinh.jpg",
                slug: "benh-vien-nhan-dan-gia-dinh",
                times: [
                    { weekend: 1, timeStart: 450, timeEnd: 1020 }, // Thứ 2
                    { weekend: 2, timeStart: 450, timeEnd: 1020 }, // Thứ 3
                    { weekend: 3, timeStart: 450, timeEnd: 1020 }, // Thứ 4
                    { weekend: 4, timeStart: 450, timeEnd: 1020 }, // Thứ 5
                    { weekend: 5, timeStart: 450, timeEnd: 1020 }, // Thứ 6
                    { weekend: 6, timeStart: 450, timeEnd: 720 },  // Thứ 7
                ]
            }
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctorSchedule(req, res, next) {
        try {
            const rs = [
                { time: 480, available: true },   // 08:00
                { time: 510, available: false },  // 08:30
                { time: 540, available: true },   // 09:00
                { time: 570, available: true },   // 09:30
                { time: 600, available: false },  // 10:00
                { time: 630, available: true },   // 10:30
                { time: 660, available: true },   // 11:00
                { time: 690, available: false },  // 11:30
                { time: 720, available: true },   // 12:00
                { time: 750, available: false }   // 12:30
            ];
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = DoctorSite;
