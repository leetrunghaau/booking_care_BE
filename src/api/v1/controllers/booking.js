const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const SpecialtiesSV = require('../services/specialties');
const HospitalSV = require('../services/hospital');
const DoctorSV = require('../services/doctor');
const { createListAddress, getProvince } = require('../helpers/addresss');
const { normalizeText } = require('../helpers/text');
const ScheduleSV = require('../services/schedule');
const BookingSV = require('../services/Booking');
const jwtConfig = require('../../config/jwt-config');
const jwt = require('jsonwebtoken');
const UserSV = require('../services/user');
const PatientSV = require('../services/patient');
const AccountSV = require('../services/account');
const { hashPassword } = require("../../v1/helpers/password-crypt");
const DiseaseSV = require('../services/disease');
const SymptomsSV = require('../services/symptom');
const DiseaseSymptom = require('../models/disease-symptoms');
const DiseaseSymptomsSV = require('../services/disease-symptoms');
const DiseaseSpecialtySV = require('../services/disease-specialty');
const { generateTimeSlots } = require('../helpers/time');
class Booking {
    static async symptoms(req, res, next) {
        // try {

        //     const spcialtyIds = (await SpecialtiesSV.all()).map(i => i.id)
        //     const diseaseIds = (await DiseaseSpecialtySV.disease(spcialtyIds)).map(i => i.diseaseId)
        //     const symptomIds = (await DiseaseSymptomsSV.symptoms(diseaseIds)).map(i => i.symptomId)
        //     const symptoms = (await SymptomsSV.all(symptomIds, 50)).map(i => i.name)
        //     resOk(res, symptoms);
        // } catch (error) {
        //     console.log(error);
        //     return next(createError.InternalServerError());
        // }

        try {
            const symptomsRaw = req.query.symptoms;
            const symptomList = Array.isArray(symptomsRaw)
                ? symptomsRaw
                : typeof symptomsRaw === "string"
                    ? symptomsRaw.split(",")
                    : [];

            if (symptomList.length == 0) {
                const spcialtyIds = (await SpecialtiesSV.all()).map(i => i.id)
                const diseaseIds = (await DiseaseSpecialtySV.disease(spcialtyIds)).map(i => i.diseaseId)
                const symptomIds = (await DiseaseSymptomsSV.symptoms(diseaseIds)).map(i => i.symptomId)
                const symptoms = symptomIds.length != 0 ? (await SymptomsSV.all(symptomIds, 50)).map(i => i.name) : []
                return resOk(res, symptoms);
            }

            console.log("🩺 Triệu chứng đầu vào:", symptomList);

            const symptomEntities = await SymptomsSV.allBySymptoms(symptomList);
            const inputSymptomIds = symptomEntities.map(s => s.id);

            const relatedEntities = await DiseaseSymptomsSV.allBSymtom(inputSymptomIds);
            console.table(relatedEntities)
            const relatedDiseaseIds = relatedEntities.map(i => i.diseaseId)

            console.log("🔍 Bệnh liên quan:", relatedDiseaseIds.length);

            if (relatedDiseaseIds.length === 0) {
                return resOk(res, []);
            }

            const allSymptomIds = await DiseaseSymptomsSV.symptoms(relatedDiseaseIds);

            const freqMap = {};
            for (const { symptomId } of allSymptomIds) {
                if (!inputSymptomIds.includes(symptomId)) {
                    freqMap[symptomId] = (freqMap[symptomId] || 0) + 1;
                }
            }

            const sortedSymptomIds = Object.keys(freqMap)
                .map(id => ({ id: Number(id), freq: freqMap[id] }))
                .sort((a, b) => b.freq - a.freq)
                .slice(0, 20);

            const topSymptomIds = sortedSymptomIds.map(s => s.id);
            const symptomInfos = await SymptomsSV.all(topSymptomIds);
            const result = symptomInfos.map(s => s.name);

            console.log("💡 Gợi ý triệu chứng liên quan:", result);

            resOk(res, result);

        } catch (error) {
            console.error(error);
            return next(createError.InternalServerError());
        }

    }
    static async specialties(req, res, next) {
        try {

            const symptomsRaw = req.query.symptoms;
            const symptomList = Array.isArray(symptomsRaw)
                ? symptomsRaw
                : typeof symptomsRaw === "string"
                    ? symptomsRaw.split(",")
                    : [];

            if (symptomList.length == 0) {
                const rs = await SpecialtiesSV.all()
                resOk(res, rs)
                return
            }

            const symptomIds = (await SymptomsSV.allBySymptoms(symptomList)).map(i => i.id)
            if (symptomIds.length == 0) {
                const rs = await SpecialtiesSV.all()
                resOk(res, rs)
                return
            }
            const diseaseIds = (await DiseaseSymptomsSV.allBSymtom(symptomIds)).map(i => i.diseaseId)
            if (diseaseIds.length == 0) {
                const rs = await SpecialtiesSV.all()
                resOk(res, rs)
                return
            }
            const specialtyIds = (await DiseaseSpecialtySV.specialties(diseaseIds)).map(i => i.specialtyId)
            if (specialtyIds.length == 0) {
                const rs = await SpecialtiesSV.all()
                resOk(res, rs)
                return
            }
            const specialties = await SpecialtiesSV.all(specialtyIds)

            resOk(res, specialties);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
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


    static async doctors(req, res, next) {
        try {

            const getSpecialtyIdsBySymList = async (syms) => {

                if (syms.length == 0) return (await SpecialtiesSV.all()).map(i => i.id)

                const symIds = (await SymptomsSV.allBySymptoms(syms)).map(i => i.id)
                if (symIds.length == 0) return (await SpecialtiesSV.all()).map(i => i.id)

                const dIds = (await DiseaseSymptomsSV.allBSymtom(symIds)).map(i => i.diseaseId)
                if (dIds.length == 0) return (await SpecialtiesSV.all()).map(i => i.id)

                const ids = (await DiseaseSpecialtySV.specialties(dIds)).map(i => i.specialtyId)
                if (ids.length == 0) return (await SpecialtiesSV.all()).map(i => i.id)
                return ids

            }

            const addressQuery = req.query.address ?? null;
            const addressProvince = addressQuery ? [getProvince(addressQuery)] : [];
            const specialtyId = req.query.specialty ?? null;
            const symptomsRaw = req.query.symptoms;
            const symptomList = Array.isArray(symptomsRaw)
                ? symptomsRaw
                : typeof symptomsRaw === "string"
                    ? symptomsRaw.split(",")
                    : [];

            // có 3 hướng 
            // address
            // symptom
            // specialty
            // niếu có spt thì bỏ qua symptom

            let specialtyIds = []
            if (specialtyId) {
                specialtyIds = [Number(specialtyId)]
            } else {
                specialtyIds = await getSpecialtyIdsBySymList(symptomList)
            }

            let doctors = await DoctorSV.all2(specialtyIds, addressProvince);
            resOk(res, doctors);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctor(req, res, next) {
        try {

            const error = req.params.id ?? null
            if ((!error) || error == "null" || error == "NaN") {
                resOk(res, null, `chưa truyền id doctor và api get doctor by id (params=  ${req.params})`)
                return

            }
            const rs = await DoctorSV.one(Number(req.params.id))

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctorSchedule(req, res, next) {
        try {
            const doctor = await DoctorSV.one(req.params.id)
            if (!doctor) {
                resOk(res, [])
                return
            }

            const schedule = await ScheduleSV.mainDId(doctor.id)
            if (!schedule) {
                resOk(res, [])
                return
            }
            const bookings = await BookingSV.allByDidADate(doctor.id, req.params.date);
            const bookedTimes = bookings.map(i => {
                const [h, m] = i.time.split(':').map(Number);
                return h * 60 + m + 1;
            });

            const timeSlots = generateTimeSlots(schedule);

            const times = timeSlots.map(slot => {
                const [hStart, mStart] = slot.start.split(':').map(Number);
                const [hEnd, mEnd] = slot.end.split(':').map(Number);
                const slotStart = hStart * 60 + mStart;
                const slotEnd = hEnd * 60 + mEnd;

                const isBooked = bookedTimes.some(time => {
                    return (time >= slotStart && time <= slotEnd)
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



    static async info(req, res, next) {
        try {

            // không có hearder    
            if (!req.headers['authorization']) return resOk(res, null)
            const authHeader = req.headers['authorization'];
            const bearerToken = authHeader.split(' ');
            const token = bearerToken[1];
            // token không đuunsg định dạng
            if (bearerToken[0] != 'Bearer') return resOk(res, null)
            const payload = jwt.verify(token, jwtConfig.sortKey);
            const user = await UserSV.one(payload.userId);
            //user không có trong hệ thống
            if (!user) resOk(res, null)
            //user không đúng role
            if (user.role != "patient") return resOk(res, null)

            let rs = await PatientSV.one(user.id)

            if (!rs) return resOk(res, null)

            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async up(req, res, next) {
        try {
            const resolvePatient = async (input) => {
                if (input.patientId) return input.patientId;
                if (!input.email) return null;

                // Tìm hoặc tạo user theo email
                let user = await UserSV.oneEmail(input.email);
                if (!user) {
                    user = await UserSV.up({ email: input.email });
                }

                // Kiểm tra bệnh nhân đã tồn tại theo userId
                const existingPatient = await PatientSV.oneUId(user.id);
                if (existingPatient) return existingPatient.id;

                // Nếu chưa có, tạo bệnh nhân mới
                const newPatient = await PatientSV.up({
                    userId: user.id,
                    name: input.name,
                    dob: input.dob,
                    phone: input.phone,
                    gender: input.gender,
                    address: input.address,
                });

                return newPatient.id;
            };

            const input = req.body;
            const doctor = await DoctorSV.one(input.doctorId);

            if (!doctor) {
                return resOk(res, null, "Không tìm thấy bác sĩ tương ứng");
            }
            const schedule = await ScheduleSV.mainDId(doctor.id)
            if (!schedule) {
                resOk(res, null, "Đã có lỗi vui lòng nhập lại")
                return
            }
            const patientId = await resolvePatient(input);
            if (!patientId) {
                return resOk(res, null, "Không thể xác định bệnh nhân");
            }

            const bookingData = {
                patientId,
                doctorId: doctor.id,
                day: input.date,
                time: input.time,
                price: schedule.appointmentPrice,
                reason: input.symptoms,
                duration: schedule.appointmentDuration
            };

            const result = await BookingSV.up(bookingData);
            return resOk(res, result);

        } catch (error) {
            console.error(error);
            return next(createError.InternalServerError());
        }
    }




}
module.exports = Booking;
