const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
class Booking {

    static async specialties(req, res, next) {
        try {
            const rs = [
                {
                    id: 1,
                    name: "Tim mạch",
                    description: "Các vấn đề về tim và mạch máu",
                    icon: "Heart",
                    symptoms: ["Đau ngực", "Khó thở", "Tim đập nhanh", "Huyết áp cao", "Chóng mặt"],
                },
                {
                    id: 2,
                    name: "Thần kinh",
                    description: "Các vấn đề về hệ thần kinh",
                    icon: "Brain",
                    symptoms: ["Đau đầu", "Chóng mặt", "Mất ngủ", "Stress", "Lo âu", "Trầm cảm"],
                },
                {
                    id: 3,
                    name: "Cơ xương khớp",
                    description: "Các vấn đề về xương, khớp và cơ",
                    icon: "Bone",
                    symptoms: ["Đau lưng", "Đau khớp", "Đau cơ", "Cứng khớp", "Sưng khớp"],
                },
                {
                    id: 4,
                    name: "Mắt",
                    description: "Các vấn đề về mắt và thị lực",
                    icon: "Eye",
                    symptoms: ["Mờ mắt", "Đau mắt", "Khô mắt", "Ngứa mắt", "Chảy nước mắt"],
                },
                {
                    id: 5,
                    name: "Tai mũi họng",
                    description: "Các vấn đề về tai, mũi, họng",
                    icon: "Ear",
                    symptoms: ["Đau họng", "Nghẹt mũi", "Ho", "Sốt", "Đau tai"],
                },
                {
                    id: 6,
                    name: "Sản phụ khoa",
                    description: "Chăm sóc sức khỏe phụ nữ",
                    icon: "Baby",
                    symptoms: ["Đau bụng kinh", "Rối loạn kinh nguyệt", "Khám thai", "Tư vấn KB"],
                },
                {
                    id: 7,
                    name: "Nhi khoa",
                    description: "Chăm sóc sức khỏe trẻ em",
                    icon: "Users",
                    symptoms: ["Sốt", "Ho", "Tiêu chảy", "Khám định kỳ", "Tiêm chủng"],
                },
                {
                    id: 8,
                    name: "Nội khoa",
                    description: "Khám và điều trị bệnh nội khoa",
                    icon: "Stethoscope",
                    symptoms: ["Đau bụng", "Buồn nôn", "Mệt mỏi", "Sốt", "Khó tiêu"],
                },
                {
                    id: 9,
                    name: "Da liễu",
                    description: "Các vấn đề về da và tóc",
                    icon: "Activity",
                    symptoms: ["Ngứa da", "Phát ban", "Mụn", "Rụng tóc", "Nấm da"],
                },
                {
                    id: 10,
                    name: "Tổng quát",
                    description: "Khám sức khỏe tổng quát",
                    icon: "UserCheck",
                    symptoms: ["Khám định kỳ", "Tư vấn sức khỏe", "Xét nghiệm", "Chưa rõ triệu chứng"],
                },
            ]

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async hospitals(req, res, next) {
        try {
            const rs = [
                { icon: "Brain", name: "Thần kinh", slug: "than-kinh" },
                { icon: "Heart", name: "Tim mạch", slug: "tim-mach" },
                { icon: "Eye", name: "Mắt", slug: "mat" },
                { icon: "Bone", name: "Cơ xương khớp", slug: "co-xuong-khop" },
                { icon: "Baby", name: "Nhi khoa", slug: "nhi-khoa" },
                { icon: "Stethoscope", name: "Tai mũi họng", slug: "tai-mui-hong" },
            ]
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctors(req, res, next) {
        try {
            const specialties = [
                { id: 1, name: "Cardiology", icon: "heart" },
                { id: 2, name: "Neurology", icon: "brain" },
                { id: 3, name: "Pediatrics", icon: "baby" },
            ];

            const hospitals = [
                {
                    id: 1,
                    name: "Bệnh viện Đại học Y Dược TP.HCM",
                    address: "215 Hồng Bàng, Quận 5, TP.HCM",
                    img: "https://randomuser.me/api/portraits/men/45.jpg",
                    slug: "benh-vien-dai-hoc-y-duoc-tphcm",
                    phone: "02438255599",
                    times: [
                        { weekend: 0, timeStart: 800, timeEnd: 1700 },
                        { weekend: 1, timeStart: 900, timeEnd: 1200 },
                    ],
                },
                {
                    id: 2,
                    name: "Bệnh viện Chợ Rẫy",
                    address: "201B Nguyễn Chí Thanh, Quận 5, TP.HCM",
                    img: "https://randomuser.me/api/portraits/men/68.jpg",
                    slug: "benh-vien-cho-ray",
                    phone: "01427839464",
                    times: [
                        { weekend: 0, timeStart: 730, timeEnd: 1630 },
                        { weekend: 1, timeStart: 800, timeEnd: 1200 },
                    ],
                },
            ]

            const doctors = [
                {
                    id: 1,
                    img: "https://randomuser.me/api/portraits/men/45.jpg",
                    name: "Nguyễn Văn A",
                    specialty: specialties[0],
                    title: "Bác sĩ chuyên khoa I",
                    rating: 4.8,
                    sumRating: 125,
                    experience: "15 năm kinh nghiệm",
                    availableToday: true,
                    hospital: hospitals[0],
                },
                {
                    id: 2,
                    img: "https://randomuser.me/api/portraits/women/68.jpg",
                    name: "Trần Thị B",
                    specialty: specialties[1],
                    title: "Bác sĩ chuyên khoa II",
                    rating: 4.5,
                    sumRating: 98,
                    experience: "10 năm kinh nghiệm",
                    availableToday: false,
                    hospital: hospitals[1],
                },
                {
                    id: 3,
                    img: "https://randomuser.me/api/portraits/men/12.jpg",
                    name: "Lê Văn C",
                    specialty: specialties[2],
                    title: "Bác sĩ",
                    rating: 4.9,
                    sumRating: 203,
                    experience: "8 năm kinh nghiệm",
                    availableToday: true,
                    hospital: hospitals[1],
                },
                {
                    id: 4,
                    img: "https://randomuser.me/api/portraits/women/20.jpg",
                    name: "Phạm Thị D",
                    specialty: specialties[2],
                    title: "Bác sĩ chuyên khoa I",
                    rating: 4.7,
                    sumRating: 134,
                    experience: "12 năm kinh nghiệm",
                    availableToday: false,
                    hospital: hospitals[0],
                },
            ]

            resOk(res, doctors);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async one(req, res, next) {
        try {


            const rs = {
                id: 1,
                name: "Bác sĩ Nguyễn Văn A",
                specialty: "Răng hàm mặt",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                location: "Hồ Chí Minh",
                room: "Phòng 101"
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
module.exports = Booking;
