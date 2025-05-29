const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const DoctorSV = require('../services/doctor');
const RatingSV = require('../services/rating');
const ScheduleSV = require('../services/schedule');
const BookingSV = require('../services/Booking');
const { DATEONLY } = require('sequelize');
const generateTimeSlots = require('../helpers/time');
const SpecialtiesSV = require('../services/specialties');
const HospitalSV = require('../services/hospital');
const { createListAddress } = require('../helpers/addresss');
class DoctorSite {
    static async addresses(req, res, next) {
        try {

            const hospital = await HospitalSV.all()
            const listFullAddress = hospital.map(i => i.address)
            //tìm địa chỉ của user
            //niếu có đăng nhập thì lấy thứ tự tìm, address -> danh sách đã khám (lấy theo địa chỉ số lần khám nhiều nhất)
            const rs = createListAddress(listFullAddress)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async spesialties(req, res, next) {
        try {
            const specialties = await SpecialtiesSV.all();
            const rs = specialties.map(({ slug, name, icon }) => ({ slug, name, icon }));
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async all(req, res, next) {
        try {
            const doctors = await DoctorSV.all()
            resOk(res, doctors);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async oneBySlug(req, res, next) {
        try {
            const rs = await DoctorSV.oneBySlug(req.params.slug)
            console.log("slug", req.params.slug)
            console.log("slug", rs)
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async rating(req, res, next) {
        try {
            const doctor = await DoctorSV.oneBySlug(req.params.slug)
            if (!doctor) {
                resOk(res, null)
            }
            const ratings = await RatingSV.allDId(doctor.id);

            let sumRating = 0;
            const starCounts = [0, 0, 0, 0, 0];

            ratings.forEach(item => {
                const star = Number(item.rating);
                if (star >= 1 && star <= 5) {
                    starCounts[star - 1] += 1;
                    sumRating += star;
                }
            });

            const ratingDistribution = starCounts.map((count, i) => {
                return {
                    stars: i + 1,
                    percentage: ratings.length > 0 ? (count / ratings.length * 100).toFixed(0) : 0
                };
            }).sort((a, b) => b.stars - a.stars)

            const rs = {
                ratingDistribution,
                avgRating: ratings.length > 0 ? (sumRating / ratings.length).toFixed(1) : 0,
                sumRating: ratings.length,
            };
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async ratings(req, res, next) {
        try {
            const doctor = await DoctorSV.oneBySlug(req.params.slug)
            if (!doctor) {
                resOk(res, null)
                return
            }
            console.log("p3")

            const max = await RatingSV.countDId(doctor.id)
            console.log("p1")
            const ratings = await RatingSV.allDIdvsL(doctor.id, Number(req.params.len));
            console.log("p2")
            resOk(res, { max: max, rvs: ratings });
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
           

            const doctor = await DoctorSV.oneBySlug(req.params.slug)
            if (!doctor) {
                resOk(res, null, "Lỗi tuy vấn")
                return
            }

            const schedule = await ScheduleSV.mainDId(doctor.id)
            if (!schedule) {
                resOk(res, [])
                return
            }
            const bookings = await BookingSV.allByDidADate(doctor.id, req.params.day);

            const bookedTimes = bookings.map(i => {
                const [h, m] = i.bookingTime.split(':').map(Number);
                return h * 60 + m + 1;
            });

            const timeSlots = generateTimeSlots(schedule);

            const times = timeSlots.map(slot => {
                const [hStart, mStart] = slot.start.split(':').map(Number);
                const [hEnd, mEnd] = slot.end.split(':').map(Number);
                const slotStart = hStart * 60 + mStart;
                const slotEnd = hEnd * 60 + mEnd;

                const isBooked = bookedTimes.some(bookingTime => {
                    return (bookingTime >= slotStart && bookingTime <= slotEnd)
                });

                return {
                    ...slot,
                    available: !isBooked
                };
            });


            const appointmentDuration = schedule.appointmentDuration;
            console.log("===============>", bookedTimes)
            resOk(res, times);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = DoctorSite;
