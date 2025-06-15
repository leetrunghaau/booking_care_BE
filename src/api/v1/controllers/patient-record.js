const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const PatientSV = require('../services/patient');
const BookingSV = require('../services/Booking');
const NotificationPatientSV = require('../services/notification-patient');
const MedicalRecordSV = require('../services/medical_records');
const moment = require('moment');
const UserSV = require('../services/user');
const EmergencyContactSV = require('../services/emergency-contacts');
const getFullURL = require('../helpers/app-url');
const { deleteFile } = require('../helpers/files');
const { hashPassword } = require('../helpers/password-crypt');
const AccountSV = require('../services/account');
const PrescriptionSV = require('../services/prescriptions');
const { pickFirstValid } = require('../helpers/obj');
const { formatTime, calculateBMI } = require('../helpers/num');
const { calculateAge, getVNGender } = require('../helpers/text');
const FileStoreSV = require('../services/files-store');
require('moment/locale/vi');
moment.locale('vi');

class PatientRecord {

    static async all(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, [])

            const recordIds = (await MedicalRecordSV.allBPantient(patient.id)).map(i => i.id)
            const rs = await Promise.all(recordIds.map(async id => {
                const record = await MedicalRecordSV.one(id)
                const prescriptions = (await PrescriptionSV.allByRecordId(record.id)).map(i => ({
                    id: i.id,
                    name: i.name ?? "",
                    dosage: i.dosage ?? "",
                    frequency: i.usage ?? "",
                    duration: i.duration ? String(i.duration) : "",
                    instructions: i.notes ?? ""
                }));
                const files = (await FileStoreSV.allRecord(record.id)).map(i => ({
                    id: i.id,
                    name: i.fileName,
                    type: i.fileType,
                    url: i.fileUrl,
                    uploadedAt: i.uploadedAt ? moment(i.uploadedAt).format("[ngày] DD, MM, YYYY") : ""

                }))

                return {
                    id: record.id,
                    doctorSlug: record.doctor?.slug ?? null,
                    doctorName: record.doctor?.name ?? "không có thông tin",
                    specialty: record.doctor?.specialty?.name ?? "Đa khoa",
                    specialtyIcon: record.doctor?.specialty?.icon ?? "NVA",
                    hospital: pickFirstValid(record.doctor?.hospital?.name, "Bác sĩ tư nhân"),
                    address: pickFirstValid(record.doctor?.hospital?.address, record.doctor?.address, "Không có thông tin"),
                    date: moment(record.visitDate, "YYYY-MM-DD").format("D [tháng] M, YYYY"),
                    status: "completed",
                    statusColor: "green",
                    avatar: record.doctor?.img ?? null,
                    prescriptions: prescriptions,
                    prescriptionsInfo: {
                        date: moment(record.visitDate, "YYYY-MM-DD").format("D [tháng] M, YYYY"),
                        patientName: patient.name,
                        patientAge: calculateAge(patient.dob),
                        patientGender: getVNGender(patient.gender),
                        diagnosis: record.finalDiagnosis,
                        doctorName: record.doctor?.name ?? "không có thông tin",
                        doctorSpecialty: record.doctor?.specialty?.name ?? "Bác sĩ đa khoa",
                        doctorHospital: record.doctor?.hospital?.name ?? "Bác sĩ tư nhân",
                        generalInstructions: record.generalInstructions ?? ""

                    },
                    result: {
                        id: record.id,
                        doctorName: record.doctor?.name ?? "không có thông tin",
                        recordDate: moment(record.visitDate, "YYYY-MM-DD").format("D [tháng] M, YYYY"),
                        symptoms: record.symptoms ?? (record.diagnosis ?? ""),
                        finalDiagnosis: record.finalDiagnosis,
                        notes: record.notes,
                        bloodPressure: record.bloodPressure,
                        temperature: record.temperature,
                        pulse: record.pulse,
                        weight: record.weight,
                        bmi: calculateBMI(record.weight, record.height),
                    },
                    files: files
                }
            }));
            resOk(res, rs)
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = PatientRecord;
