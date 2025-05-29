const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const SpecialtiesSV = require('../services/specialties');
const HospitalSV = require('../services/hospital');
const DoctorSV = require('../services/doctor');
const { createListAddress, getProvince } = require('../helpers/addresss');
const { normalizeText } = require('../helpers/text');
class Booking {
    static async symptoms(req, res, next) {
        try {
            const specialties = await SpecialtiesSV.all()
            const allDiseaseNames = specialties.flatMap(specialty =>
                specialty.commonDiseases.map(disease => disease.name)
            );
            resOk(res, allDiseaseNames);
        } catch (error) {
            console.log(error);
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

            const normalizedSymptoms = symptomList
                .map(s => normalizeText(s))
                .filter(Boolean);
            const specialties = await SpecialtiesSV.all()
            const rs = normalizedSymptoms.length === 0
                ? specialties
                : specialties.filter(spt =>
                    spt.commonDiseases.some(disease => {
                        const normalizedDisease = normalizeText(disease.name);
                        return normalizedSymptoms.some(symptom => normalizedDisease.includes(symptom));
                    })
                );

            resOk(res, rs);
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
            const addressQuery = req.query.address ?? null;
            const addressProvince = addressQuery ? getProvince(addressQuery) : null;

            const specialty = req.query.specialty ?? null;

            const symptomsRaw = req.query.symptoms;
            const symptomList = Array.isArray(symptomsRaw)
                ? symptomsRaw
                : typeof symptomsRaw === "string"
                    ? symptomsRaw.split(",")
                    : [];

            const normalizedSymptoms = symptomList
                .map(s => normalizeText(s).trim())
                .filter(Boolean); 

            const specialties = await SpecialtiesSV.all();
            const relatedSpecialties = normalizedSymptoms.length === 0
                ? specialties.map(spt=> spt.id)
                : specialties.filter(spt =>
                    spt.commonDiseases?.some(disease => {
                        const normalizedDisease = normalizeText(disease.name);
                        return normalizedSymptoms.some(symptom => normalizedDisease.includes(symptom));
                    })
                ).map(spt=> spt.id)

            let doctors = await DoctorSV.allPid(specialty ? Number(specialty) : relatedSpecialties);

            if (addressProvince) {
                doctors = doctors.filter(doctor => {
                    const fullAddress = doctor.hospital?.address ?? doctor.address ?? "";
                    const doctorProvince = getProvince(fullAddress);
                    return normalizeText(doctorProvince) == normalizeText(addressProvince);
                });
            }

            resOk(res, doctors);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async doctor(req, res, next) {
        try {
            const rs = await DoctorSV.one(Number(req.params.id))
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
