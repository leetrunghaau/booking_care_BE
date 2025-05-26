const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const Specialty = require("../models/specialty");
const fakeSpecialties = require("../data/f-data/specialty");
const Hospital = require("../models/hospital");
const Doctor = require("../models/doctor");
const HospitalSpecialty = require("../models/hospital-spacialty");
const Patient = require("../models/patient");
const NotificationPatient = require("../models/notification-patient");
const PatientAccount = require("../models/patient-account");
const Rating = require("../models/rating");
const DoctorAccount = require("../models/doctor-account");
const NotificationDoctor = require("../models/notification-doctor");
const ScheduleSetting = require("../models/schedule_settings");
const Booking = require("../models/booking");
const TimeSlot = require("../models/time-slot");
const fakeHospitals = require("../data/f-data/hospital");
const fakeDoctor = require("../data/f-data/doctor");
const hospitalSpecialtiesFakeData = require("../data/f-data/hospital-spacialty");
const fakePatients = require("../data/f-data/patient");
const notificationPatientsFakeData = require("../data/f-data/notification-patient");
const fakeRatings = require("../data/f-data/rating");
const patientAccountsFakeData = require("../data/f-data/patient-account");
const fakeDoctorAccounts = require("../data/f-data/doctor-account");
const fakeNotificationDoctors = require("../data/f-data/notification-doctor");
const fakeScheduleSettings = require("../data/f-data/schedule_settings");
const fakeTimeSlots = require("../data/f-data/time-slot");
const fakeBookings = require("../data/f-data/booking");

class FData {
    static async generate(req, res, next) {
        try {

            switch (req.params.id) {
                case "1":
                    // Tạo specialties và hospitals
                    await Specialty.bulkCreate(fakeSpecialties);
                    await Hospital.bulkCreate(fakeHospitals);
                    resOk(res, "Specialties và Hospitals đã tạo");
                    break;

                case "2":
                    let doctors = [...fakeDoctor];
                    doctors.forEach(i => {
                        if (i.hospitalId > fakeHospitals.length || i.hospitalId <= 0) {
                            i.hospitalId = ((i.hospitalId - 1) % fakeHospitals.length) + 1;
                        }
                        if (i.specialtyId > fakeSpecialties.length || i.specialtyId <= 0) {
                            i.specialtyId = ((i.specialtyId - 1) % fakeSpecialties.length) + 1;
                        }
                    });
                    await Doctor.bulkCreate(doctors);
                    resOk(res, "Doctors đã tạo");
                    break;

                case "3":
                    // Tạo hospital_specialty
                    let hospital_specialty = [...hospitalSpecialtiesFakeData];
                    hospital_specialty.forEach(i => {
                        if (i.hospitalId > fakeHospitals.length || i.hospitalId <= 0) {
                            i.hospitalId = (i.hospitalId % fakeHospitals.length) || fakeHospitals.length;
                        }
                        if (i.specialtyId > fakeSpecialties.length || i.specialtyId <= 0) {
                            i.specialtyId = (i.specialtyId % fakeSpecialties.length) || fakeSpecialties.length;
                        }
                    });
                    await HospitalSpecialty.bulkCreate(hospital_specialty);
                    resOk(res, "HospitalSpecialty đã tạo");
                    break;

                case "4":
                    // Tạo patients
                    await Patient.bulkCreate(fakePatients);
                    resOk(res, "Patients đã tạo");
                    break;

                case "5":
                    // Tạo notification_patient
                    let notification_patient = [...notificationPatientsFakeData];
                    notification_patient.forEach(i => {
                        if (i.patientId > fakePatients.length || i.patientId <= 0) {
                            i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                        }
                    });
                    await NotificationPatient.bulkCreate(notification_patient);
                    resOk(res, "NotificationPatient đã tạo");
                    break;

                case "6":
                    // Tạo patient_account
                    let patient_account = [...patientAccountsFakeData];
                    patient_account.forEach(i => {
                        if (i.patientId > fakePatients.length || i.patientId <= 0) {
                            i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                        }
                    });
                    await PatientAccount.bulkCreate(patient_account);
                    resOk(res, "PatientAccount đã tạo");
                    break;

                case "7":
                    // Tạo rating
                    let rating = [...fakeRatings];
                    rating.forEach(i => {
                        if (i.patientId > fakePatients.length || i.patientId <= 0) {
                            i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                        }
                        if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                            i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                        }
                    });
                    await Rating.bulkCreate(rating);
                    resOk(res, "Rating đã tạo");
                    break;

                case "8":
                    // Tạo doctor_account
                    let doctor_account = [...fakeDoctorAccounts];
                    doctor_account.forEach(i => {
                        if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                            i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                        }
                    });
                    await DoctorAccount.bulkCreate(doctor_account);
                    resOk(res, "DoctorAccount đã tạo");
                    break;

                case "9":
                    // Tạo notification_doctor
                    let notification_doctor = [...fakeNotificationDoctors];
                    notification_doctor.forEach(i => {
                        if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                            i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                        }
                    });
                    await NotificationDoctor.bulkCreate(notification_doctor);
                    resOk(res, "NotificationDoctor đã tạo");
                    break;

                case "10":
                    // Tạo schedule_settings
                    let schedule_settings = [...fakeScheduleSettings];
                    schedule_settings.forEach(i => {
                        if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                            i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                        }
                    });
                    await ScheduleSetting.bulkCreate(schedule_settings);
                    resOk(res, "ScheduleSetting đã tạo");
                    break;

                case "11":
                    // Tạo bookings
                    let bookings = [...fakeBookings];
                    bookings.forEach(i => {
                        if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                            i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                        }
                        if (i.patientId > fakePatients.length || i.patientId <= 0) {
                            i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                        }
                    });
                    await Booking.bulkCreate(bookings);
                    resOk(res, "Booking đã tạo");
                    break;

                case "12":
                    // Tạo timeSlots
                    let timeSlots = [...fakeTimeSlots];
                    timeSlots.forEach(i => {
                        if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                            i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                        }
                    });
                    await TimeSlot.bulkCreate(timeSlots);
                    resOk(res, "TimeSlot đã tạo");
                    break;

                default:
                    res.status(400).json({ message: "Param id không hợp lệ" });
                    break;
            }
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async generateAll(req, res, next) {
        try {


            // Tạo specialties và hospitals
            await Specialty.bulkCreate(fakeSpecialties);
            await Hospital.bulkCreate(fakeHospitals);

            let doctors = [...fakeDoctor];
            doctors.forEach(i => {
                if (i.hospitalId > fakeHospitals.length || i.hospitalId <= 0) {
                    i.hospitalId = ((i.hospitalId - 1) % fakeHospitals.length) + 1;
                }
                if (i.specialtyId > fakeSpecialties.length || i.specialtyId <= 0) {
                    i.specialtyId = ((i.specialtyId - 1) % fakeSpecialties.length) + 1;
                }
            });
            await Doctor.bulkCreate(doctors);

            // Tạo hospital_specialty
            let hospital_specialty = [...hospitalSpecialtiesFakeData];
            hospital_specialty.forEach(i => {
                if (i.hospitalId > fakeHospitals.length || i.hospitalId <= 0) {
                    i.hospitalId = (i.hospitalId % fakeHospitals.length) || fakeHospitals.length;
                }
                if (i.specialtyId > fakeSpecialties.length || i.specialtyId <= 0) {
                    i.specialtyId = (i.specialtyId % fakeSpecialties.length) || fakeSpecialties.length;
                }
            });
            await HospitalSpecialty.bulkCreate(hospital_specialty);

            // Tạo patients
            await Patient.bulkCreate(fakePatients);

            // Tạo notification_patient
            let notification_patient = [...notificationPatientsFakeData];
            notification_patient.forEach(i => {
                if (i.patientId > fakePatients.length || i.patientId <= 0) {
                    i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                }
            });
            await NotificationPatient.bulkCreate(notification_patient);

            // Tạo patient_account
            let patient_account = [...patientAccountsFakeData];
            patient_account.forEach(i => {
                if (i.patientId > fakePatients.length || i.patientId <= 0) {
                    i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                }
            });
            await PatientAccount.bulkCreate(patient_account);

            // Tạo rating
            let rating = [...fakeRatings];
            rating.forEach(i => {
                if (i.patientId > fakePatients.length || i.patientId <= 0) {
                    i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                }
                if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                    i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                }
            });
            await Rating.bulkCreate(rating);

            // Tạo doctor_account
            let doctor_account = [...fakeDoctorAccounts];
            doctor_account.forEach(i => {
                if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                    i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                }
            });
            await DoctorAccount.bulkCreate(doctor_account);

            // Tạo notification_doctor
            let notification_doctor = [...fakeNotificationDoctors];
            notification_doctor.forEach(i => {
                if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                    i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                }
            });
            await NotificationDoctor.bulkCreate(notification_doctor);

            // Tạo schedule_settings
            let schedule_settings = [...fakeScheduleSettings];
            schedule_settings.forEach(i => {
                if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                    i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                }
            });
            await ScheduleSetting.bulkCreate(schedule_settings);

            // Tạo bookings
            let bookings = [...fakeBookings];
            bookings.forEach(i => {
                if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                    i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                }
                if (i.patientId > fakePatients.length || i.patientId <= 0) {
                    i.patientId = (i.patientId % fakePatients.length) || fakePatients.length;
                }
            });
            await Booking.bulkCreate(bookings);

            // Tạo timeSlots
            let timeSlots = [...fakeTimeSlots];
            timeSlots.forEach(i => {
                if (i.doctorId > fakeDoctor.length || i.doctorId <= 0) {
                    i.doctorId = (i.doctorId % fakeDoctor.length) || fakeDoctor.length;
                }
            });
            await TimeSlot.bulkCreate(timeSlots);
            resOk(res, "all đã tạo");

        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

}
module.exports = FData;
