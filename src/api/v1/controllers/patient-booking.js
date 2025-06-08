const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const PatientSV = require('../services/patient');
const BookingSV = require('../services/Booking');
const NotificationPatientSV = require('../services/notification-patient');
const MedicalRecordSV = require('../services/medical_records');
const moment = require('moment');
const DoctorSV = require('../services/doctor');
const HospitalSV = require('../services/hospital');
class PatientBooking {

    static async all(req, res, next) {
        try {
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(req, null)
            const today = moment().format('YYYY-MM-DD');
            const bookings = (await BookingSV.allByPatientFromTo(patient.id, today, null, ['pending', 'confirmed'])).map(i => {
                return {
                    id: i.id,
                    code: i.patient.code,
                    date: i.day,
                    time: i.time,
                    doctor: i.doctor?.name ?? "Không có thông tin",
                    specialty: i.doctor?.specialty?.name ?? "Đa khoa",
                    specialtyIcon: i.doctor?.specialty?.icon ?? "",
                    facility: i.doctor?.hospital?.name ?? "Bác sĩ tư nhân",
                    facilityAddress: i.doctor?.hospital?.address ?? (i.doctor?.address ?? "Không có thông tin"),
                    doctorAvatar: i.doctor?.img ?? null,
                    status: i.status
                }

            })
            resOk(res, bookings)
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async one(req, res, next) {
        try {
            const id = req.params.id
            if (!id || isNaN(Number(id))) return resOk(res, null);
            const patient = await PatientSV.oneUId(req.user.id)
            if (!patient) return resOk(req, null)

            const booking = await BookingSV.one(id)
            if (!booking) return resOk(res, null)
            const doctor = await DoctorSV.one(booking.doctorId)
            if (!doctor) return resOk(res, null)
            const facility = await HospitalSV.one(doctor.hospitalId);

            const bookingDateTime = moment(`${booking.day} ${booking.time}`, "YYYY-MM-DD HH:mm:ss");
            const hoursDiff = bookingDateTime.diff(moment(), "hours");

            const allowCancel = (
                (booking.status === "pending" || booking.status === "confirmed") &&
                hoursDiff >= 24
            );

            resOk(res, {
                id: booking.id,
                status: booking.status,
                date: booking.day ? moment(booking.day, "YYYY-MM-DD").format("DD-MM-YYYY") : "Không có thông tin",
                time: booking.time ? moment(booking.time, "HH:mm:ss").format("HH:mm") : "Không có thông tin",
                notes: booking.notes || null,
                allowCancel,
                doctor: {
                    slug: doctor.slug,
                    name: doctor.name,
                    avatar: doctor.img,
                    specialty: doctor.specialty?.name ?? "Bác sĩ đa khoa",
                    position: doctor.position ?? "",
                    experience: doctor.experience ?? "",
                    workplace: facility?.name || "",
                },
                facility: {
                    name: facility?.name || "",
                    address: facility?.address || "",
                    image: facility?.thumbnail,
                }
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async cancel(req, res, next) {
        try {
            const id = req.params.id;

            if (!id || isNaN(Number(id))) return resOk(res, null);

            const patient = await PatientSV.oneUId(req.user.id);
            if (!patient) return resOk(res, null);

            const booking = await BookingSV.one(id);
            if (!booking || booking.patientId !== patient.id) return resOk(res, null);

            if (booking.status !== "pending" && booking.status !== "confirmed") {
                return resOk(res, {
                    success: false,
                    message: "Không thể huỷ lịch đã hoàn thành hoặc đã huỷ.",
                });
            }

            const bookingDateTime = moment(`${booking.day} ${booking.time}`, "YYYY-MM-DD HH:mm:ss");
            const hoursDiff = bookingDateTime.diff(moment(), "hours");

            if (hoursDiff < 24) {
                return resOk(res, {
                    success: false,
                    message: "Chỉ có thể huỷ lịch trước 24 giờ.",
                });
            }

            await BookingSV.edit(booking.id, { status: "cancelled" });

            return resOk(res, {
                success: true,
                message: "Đã huỷ lịch khám thành công.",
            });

        } catch (error) {
            console.error(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = PatientBooking;
