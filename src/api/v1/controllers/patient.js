const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const PatientSV = require('../services/patient');
const BookingSV = require('../services/Booking');
const NotificationPatientSV = require('../services/notification-patient');
const MedicalRecordSV = require('../services/medical_records');
class Patient {
    static async all(req, res, next) {
        try {

            resOk(res, null);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async info(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(req, null)
            const toDay = new Date().toISOString().split('T')[0];
            const bookings = await BookingSV.allByPatinetADay(patient.id, toDay)
            const bookingsRS = bookings.filter(b =>( b.status == "confirmed" || b.status == "pending" )).map(i => {
                return {
                    id: i.id,
                    date: i.day,
                    time: i.time,
                    status: "Chờ xác nhận",
                    doctor: "ThS.BS. Trần Thị B",
                    doctorAvatar: "/placeholder.svg",
                    specialty: "Thần kinh",
                    facility: "PK Quốc tế Vinmec",
                }
            })
            const notifications = await NotificationPatientSV.allMyUnRead(patient.id)
            const record = await MedicalRecordSV.allBPantient(patient.id)

            resOk(res, {
                upcomingAppointment: bookingsRS.length,
                upcomingAppointments: bookingsRS,
                notification: notifications.length,
                notifications: notifications,
                history: record.length
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Patient;
