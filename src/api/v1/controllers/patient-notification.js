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
const { formatTime } = require('../helpers/num');

class PatientNotification {

    static async all(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, [])
            const rs = (await NotificationPatientSV.allBPatient(patient.id)).map(i => {
                return {
                    id: i.id,
                    type: i.type,
                    title: i.title,
                    message: i.message,
                    isRead: i.isRead,
                    time: moment(i.createdAt).utcOffset(7).format("DD/MM/YYYY HH:mm")

                }
            })
            resOk(res, rs)
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async one(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(res, null)
            const id = Number(req.params.id)
            if (!id) return resOk(res, null);
            const rs = await NotificationPatientSV.one(id)
            await NotificationPatientSV.edit(rs.id, { isRead: true })
            resOk(res, {
                id: rs.id,
                type: rs.type,
                title: rs.title,
                message: rs.message,
                isRead: true,
                time: moment(rs.createdAt).utcOffset(7).format("DD/MM/YYYY HH:mm")
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = PatientNotification;
