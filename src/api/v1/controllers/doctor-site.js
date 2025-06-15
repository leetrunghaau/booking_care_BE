const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const DoctorSV = require('../services/doctor');
const RatingSV = require('../services/rating');
const ScheduleSV = require('../services/schedule');
const BookingSV = require('../services/Booking');
const { DATEONLY } = require('sequelize');
const SpecialtiesSV = require('../services/specialties');
const HospitalSV = require('../services/hospital');
const { createListAddress } = require('../helpers/addresss');
const DoctorTechniquesSV = require('../services/doctor-techniques');
const DoctorExperienceSV = require('../services/doctor-experiences');
const DoctorEducationSV = require('../services/doctor-educations');
const DoctorLanguageSV = require('../services/doctor-languages');
const DoctorAnalysisSV = require('../services/doctor-analyses');
const { formatPhoneNumber, formatVND } = require('../helpers/num');
const UserSV = require('../services/user');
const PatientSV = require('../services/patient');
const MedicalRecordSV = require('../services/medical-record');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt-config');
const { generateTimeSlots, getReadableTimeRanges } = require('../helpers/time');
const { pickFirstValid } = require('../helpers/obj');
const HospitalTimeSV = require('../services/hospital-times');
const { getActiveDays } = require('../helpers/dayly');
const moment = require("moment");
const TimeSlotSV = require('../services/time-slot');
require('moment/locale/vi');
moment.locale('vi');
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
            const rs = specialties.map(({ id, slug, name, icon }) => ({ id, slug, name, icon }));
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async all(req, res, next) {
        try {
            let { page, address, specialty, search } = req.query
            page = page ? page - 1 : 0
            const data = await DoctorSV.doctorPage(page, search, address, specialty)

            resOk(res, {
                doctors: data.data,
                page: page + 1,
                total: data.total
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async oneBySlug(req, res, next) {
        try {
            const doctor = await DoctorSV.oneBySlug(req.params.slug)
            if (!doctor) return resOk(res, null)

            const spcialty = doctor.specialtyId ? await SpecialtiesSV.one(doctor.specialtyId) : "Bác sĩ đa khoa"
            const hospital = doctor.hospitalId ? await HospitalSV.one(doctor.hospitalId) : "Bác sĩ đa khoa"
            const technique = (await DoctorTechniquesSV.doctor(doctor.id)).map(i => { return { id: i.id, name: i.techniqueName } })
            const experience = (await DoctorExperienceSV.doctor(doctor.id)).map(i => {
                return {
                    id: i.id,
                    period: (!i.startYear && !i.endYear) ? "Không có thông tin" : `${i.startYear ?? ""} - ${i.endYear ?? ""}`,
                    position: i.position,
                    hospital: i.organization,

                }
            })
            const education = await DoctorEducationSV.doctor(doctor.id)
            const language = (await DoctorLanguageSV.doctor(doctor.id)).map(i => i.language)
            const analyse = (await DoctorAnalysisSV.doctor(doctor.id)).map(i => {
                return {
                    id: i.id,
                    title: i.title,
                    journal: i.journal,
                    year: i.publishedAt
                }
            })

            resOk(res, {
                id: doctor.id,
                img: doctor.img,
                slug: doctor.slug,
                name: doctor.name,
                about: doctor.about,
                rating: doctor.rating,
                reviews: doctor.reviews,
                specialty: spcialty,
                address: hospital?.address ?? (doctor.address ?? "Không có thông tin"),
                phone: doctor.phone ? formatPhoneNumber(doctor.phone) : "không có thông tin",
                technique: technique,
                experience: experience,
                education: education,
                language: language,
                analysis: analyse,

            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async getWorkingDays(req, res, next) {
        try {
            const slug = req.params.slug
            if (!slug) return resOk(res, [])
            const doctor = await DoctorSV.oneBySlug(slug)
            if (!doctor) return resOk(res, []);
            const rs = await ScheduleSV.mainDId(doctor.id);
            if (!rs) return resOk(res, []);
            resOk(res, getActiveDays(rs.workingDays));
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
    static async potsRating(req, res, next) {
        try {
            const doctor = await DoctorSV.oneBySlug(req.params.slug)
            if (!doctor) {
                resOk(res, null)
            }
            const patient = await PatientSV.oneUId(req.user.id)
            const st = await RatingSV.up({
                doctorId: doctor.id,
                patientId: patient.id,
                rating: String(req.body.rating),
                value: req.body.comment,

            })

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

            await DoctorSV.edit(doctor.id, {
                rating: rs.avgRating,
                reviews: rs.sumRating

            })



            const max = await RatingSV.countDId(doctor.id)
            const ratings2 = await RatingSV.allDIdvsL(doctor.id, req.body.index);
            resOk(res, {
                ratingDistribution: rs,
                ratings: {
                    max: max,
                    rvs: ratings2
                }
            });

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

    static async doctorHospital(req, res, next) {
        try {
            const slug = req.params.slug
            if (!slug) return resOk(res, null)
            const doctor = await DoctorSV.oneBySlug(slug)
            if (!doctor || !doctor.hospitalId) return resOk(res, null)
            const hospital = await HospitalSV.one(doctor.hospitalId)
            if (!hospital) return resOk(res, null)
            const times = (await HospitalTimeSV.hospital(hospital.id)).map(i => {
                return {
                    weekend: i.weekend,
                    timeStart: i.timeStart,
                    timeEnd: i.timeEnd
                }
            })
            resOk(res, {
                name: hospital.name,
                phone: formatPhoneNumber(hospital.phone),
                address: hospital.address,
                thumbnail: hospital.thumbnail,
                slug: hospital.slug,
                times: times.length > 0 ? getReadableTimeRanges(times) : ["Không có thông tin"]
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async canRating(req, res, next) {
        try {
            // không có hearder    
            if (!req.headers['authorization']) return resOk(res, false)
            const authHeader = req.headers['authorization'];
            const bearerToken = authHeader.split(' ');
            const token = bearerToken[1];
            // token không đuunsg định dạng
            if (bearerToken[0] != 'Bearer') return resOk(res, false)
            const payload = jwt.verify(token, jwtConfig.sortKey);
            const user = await UserSV.one(payload.userId);
            //user không có trong hệ thống
            if (!user) resOk(res, false)
            //user không đúng role
            if (user.role != "patient") return resOk(res, false)

            const patient = await PatientSV.oneUId(user.id)
            if (!patient) return resOk(res, false)
            const doctor = await DoctorSV.oneBySlug(req.params.slug)
            if (!doctor) resOk(res, false)
            const booking = await BookingSV.haveBooking(doctor.id, patient.id)
            const record = await MedicalRecordSV.havePD(doctor.id, patient.id)
            if ((booking.length == 0) && (record.length == 0)) return resOk(res, false);

            resOk(res, true);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async doctorScheduleInfo(req, res, next) {
        try {


            const doctor = await DoctorSV.oneBySlug(req.params.slug)
            if (!doctor) return resOk(res, null)

            const schedule = await ScheduleSV.mainDId(doctor.id)
            if (!schedule) return resOk(res, null)

            resOk(res, {
                id: doctor.id,
                price: formatVND(schedule.appointmentPrice),
                duration: schedule.appointmentPrice ? `${schedule.appointmentDuration} phút` : "Không có thông tin",
                address: pickFirstValid(doctor.hospital?.address, doctor.address, "Không có thông tin")
            });
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
            const bookedSlot = (await BookingSV.allByDidADate(doctor.id, req.params.date)).filter(i => (i.status == "pending" || i.status == "confirmed")).map(i => {
                const [h, m] = i.time.split(':').map(Number);
                return {
                    id: i.id,
                    start: h * 60 + m,
                    end: (h * 60 + m) + (i.duration || schedule.appointmentDuration || 30),
                    patient: i.patient ? i.patient.name : null,
                };
            });

            const busySlots = (await TimeSlotSV.allByDIdAndDate(doctor.id, req.params.date)).map(i => {
                const [h, m] = i.time.split(':').map(Number);
                return {
                    id: i.id,
                    start: h * 60 + m,
                    end: (h * 60 + m) + (i.duration || schedule.appointmentDuration || 30),
                };
            });

            const now = moment()
            const currTime = now.format('YYYY-MM-DD') != req.params.date ? -1 : now.hour() * 60 + now.minute() - 30 
            const timeSlots = generateTimeSlots(schedule).map(slot => {
                const matchedBookedSlot = bookedSlot.find(time => time.start < slot.endNum && time.end > slot.startNum);
                const matchedBusySlot = busySlots.find(time => time.start < slot.endNum && time.end > slot.startNum);
                const isBooked = !!matchedBookedSlot;
                const isBusy = !!matchedBusySlot;
                const overTime = slot.startNum < currTime
                return {
                    ...slot,
                    available: !(isBooked || isBusy || overTime)
                };
            })

            resOk(res, timeSlots);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = DoctorSite;
