const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
const moment = require('moment');
const { formatTime } = require('../helpers/num');
const DoctorSV = require('../services/doctor');
const NotificationDoctorSV = require('../services/notification-doctor');

class DoctorNotification {

    static async all(req, res, next) {
        try {
            const doctor = await DoctorSV.onByUId(req.user.id)
            if (!doctor) return resOk(res, [])
            const rs = (await NotificationDoctorSV.allBDoctor(doctor.id)).map(i => {
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
            const doctor = await DoctorSV.onByUId(req.user.id)
            if (!doctor) return resOk(res, null)
            const id = Number(req.params.id)
            if (!id) return resOk(res, null);
            const rs = await NotificationDoctorSV.one(id)
            await NotificationDoctorSV.edit(rs.id, { isRead: true })
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
module.exports = DoctorNotification;
