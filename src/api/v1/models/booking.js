const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');
const Doctor = require('./doctor');

const Booking = db.define('booking', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  // Liên kết người dùng
  patientId: { type: DataTypes.INTEGER, field: 'patient_id', references: { model: Patient, key: 'id' } },
  doctorId: { type: DataTypes.INTEGER, field: 'doctor_id', references: { model: Doctor, key: 'id' } },
  followUpId: { type: DataTypes.INTEGER, field: 'follow_up_id' },

  // Lịch hẹn
  day: DataTypes.DATEONLY,
  time: DataTypes.TIME,
  duration: DataTypes.INTEGER,
  price: { type: DataTypes.DOUBLE, allowNull: false },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
    defaultValue: 'pending'
  },
  bookingType: {
    type: DataTypes.ENUM(
      'default', 'followUp', 'newPatient', 'onDemand',
      'routineCheckup', 'specialistVisit', 'telemedicine',
      'emergency', 'consultation', 'vaccination', 'labTest'
    ),
    field: 'booking_type',
    defaultValue: 'default'
  },
  notes: DataTypes.TEXT,

  // Triệu chứng & chẩn đoán
  reason: DataTypes.TEXT,
  diagnosis: DataTypes.TEXT,
  finalDiagnosis: { type: DataTypes.TEXT, field: 'final_diagnosis' },
  generalInstructions: { type: DataTypes.TEXT, field: 'general_instructions' },

  // Sinh hiệu
  temperature: DataTypes.DECIMAL(4, 1),
  pulse: DataTypes.INTEGER,
  bloodPressure: { type: DataTypes.STRING(20), field: 'blood_pressure' },
  respiratoryRate: { type: DataTypes.INTEGER, field: 'respiratory_rate' },
  weight: DataTypes.INTEGER,
  height: DataTypes.INTEGER,
}, {
  tableName: 'booking',
  timestamps: false,
});

Booking.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Booking.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Booking.belongsTo(Booking, { as: "followUp", foreignKey: 'followUpId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Booking