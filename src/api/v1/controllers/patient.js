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

class Patient {

    static async info(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, null)

            const today = moment().format('YYYY-MM-DD');
            const bookings = (await BookingSV.allByPatientFromTo(patient.id, today, null, ["pending", "confirmed"]))
                .slice(0, 2).map(i => {
                    return {
                        id: i.id,
                        doctorImg: i.doctor?.img ?? null,
                        doctor: i.doctor?.name ?? "Lỗi thông tin",
                        specialty: i.doctor?.specialty?.name ?? "Đa khoa",
                        date: i.day,
                        time: i.time,
                        address: i.doctor?.hospital?.address ?? (i.doctor?.address ?? "không có thông tin"),
                        status: i.status,
                    }
                })
            const notifications = await NotificationPatientSV.allMyUnRead(patient.id)
            const record = await MedicalRecordSV.allBPantient(patient.id)
            resOk(res, {
                id: patient.id,
                name: patient.name,
                code: patient.code,
                img: patient.img ?? null,
                upcomingAppointment: bookings.length,
                upcomingAppointments: bookings,
                notification: notifications.length,
                notifications: notifications,
                history: record.length
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async upAvata(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, null)
            const tem = await PatientSV.edit(patient.id, { img: `/${req.customFile.subPath}/${req.customFile.filename}` })
            resOk(res, `/${req.customFile.subPath}/${req.customFile.filename}`);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async downAvata(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, null)
            if (patient.img) {
                await deleteFile(patient.img);
            }
            await PatientSV.edit(patient.id, { img: null });
            return resOk(res, true);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async myInfo(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, null)

            const relative = await EmergencyContactSV.onePatient(patient.id)
            resOk(res, {
                status: true,
                relative: relative,
                info: {
                    img: patient.img ?? "",
                    name: patient.name ?? "",
                    dob: patient.dob ?? "",
                    gender: patient.gender ?? "",
                    phone: patient.phone ?? "",
                    email: patient.user?.email ?? patient.email ?? "",
                    address: patient.address ?? "",
                }
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async upInfo(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, null)
            const info = req.body.info
            const relative = req.body.relative

            if (!(info?.email == req.user.email)) {
                const checkEmail = await UserSV.oneEmail(info.email)
                if (checkEmail) return resOk(res, { status: false, mess: "Email đã được đang ký" })
                await UserSV.edit(req.user.id, { email: info.email })
            }

            await PatientSV.edit(patient.id, info)

            const relativeExit = await EmergencyContactSV.onePatient(patient.id)
            if (relativeExit) {
                await EmergencyContactSV.edit(relativeExit.id, relative)

            } else {
                await EmergencyContactSV.up({
                    ...relative,
                    patientId: patient.id
                })
            }
            const relativeRS = await EmergencyContactSV.onePatient(patient.id)
            const patientRS = await PatientSV.one(patient.id)
            resOk(res, {
                status: true,
                relative: relativeRS,
                info: {
                    img: patientRS.img,
                    name: patientRS.name ?? "",
                    dob: patientRS.dob ?? "",
                    gender: patientRS.gender ?? "",
                    phone: patientRS.phone,
                    email: patientRS.user?.email ?? (patientRS.email ?? ""),
                    address: patientRS.address ?? "",
                }
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async newPass(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, false)
            const accout = await AccountSV.oneByUId(req.user.id)
            if (!accout) return resOk(res, false)
            const newPass = req.body.password
            if (!newPass || newPass.trim() === "") return resOk(res, false);
            const newPassDR = await hashPassword(newPass)
            const newAcc = await AccountSV.edit(accout.id, { pass: newPassDR })
            if (newAcc == 0) return resOk(res, false)
            resOk(res, true);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteAcc(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, false)
            await PatientSV.edit(patient.id, { userId: null })
            await UserSV.down(req.user.id)
            const accout = await AccountSV.oneByUId(req.user.id)
            if (accout) {
                await AccountSV.down(accout.id)
            }
            resOk(res, true);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = Patient;
