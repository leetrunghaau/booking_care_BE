// brandRepository.js

const Doctor = require("../models/doctor");
const DoctorAccount = require("../models/doctor-account");
const Patient = require("../models/patient");




class SigSV {
    static async docterEmail(email) {
        return await Doctor.findOne({ where: { email: email } });
    }
    static async pantientEmail(email) {
        return await Patient.findOne({ where: { email: email } })
    }

    static async doctorPass(id) {
        return await DoctorAccount.findOne({ where: { doctorId: id } })
    }

    static async pantientPass(id) {
        return await PatientAccount.findOne({ where: { pantientId: id } })
    }


}

module.exports = SigSV;
