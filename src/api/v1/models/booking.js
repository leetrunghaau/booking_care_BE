const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');
const Doctor = require('./doctor');

const Booking = db.define('booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  patientId: {
    type: DataTypes.INTEGER,
    field: 'patient_id',
    references: {
      model: Patient,
      key: 'id'
    },
    allowNull: false
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: 'doctor_id',
    references: {
      model: Doctor,
      key: 'id'
    },
    allowNull: false
  },

  bookingDate: {
    type: DataTypes.DATEONLY,
    field: 'booking_date',
    allowNull: false,
    comment: 'Ngày khám'
  },

  bookingTime: {
    type: DataTypes.TIME,
    field: 'booking_time',
    allowNull: false,
    comment: 'Thời gian khám'
  },

  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    comment: 'Giá khám'
  },

  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
    defaultValue: 'pending',
    comment: 'Trạng thái lịch hẹn'
  },

  reason: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Ghi chú thêm cho lịch hẹn'
  },

  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: true,
    defaultValue: null
  },

  type: {
    type: DataTypes.ENUM(
      'default',
      'followUp',
      'newPatient',
      'onDemand',
      'routineCheckup',
      'specialistVisit',
      'telemedicine',
      'emergency',
      'consultation',
      'vaccination',
      'labTest'
    ),
    field: 'booking_type',
    defaultValue: 'default',
    comment: 'Loại lịch hẹn'
  },

  duration: {
    type: DataTypes.INTEGER,
    allowNull: true
  }

}, {
  tableName: 'booking',
  timestamps: false
});

// Associations
Booking.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Booking.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Booking;
