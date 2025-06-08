const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const Schedule = db.define('schedule', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'doctor_id',
    references: {
      model: Doctor,
      key: 'id',
    },
  },
  workingDays: {
    type: DataTypes.STRING(7),
    allowNull: true,
    field: 'working_days',
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: true,
    field: 'start_time',
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: true,
    field: 'end_time',
  },
  appointmentDuration: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'appointment_duration',
  },
  appointmentPrice: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'appointment_price',
  },
  hasLunchBreak: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'has_lunch_break',
  },
  lunchStart: {
    type: DataTypes.TIME,
    allowNull: true,
    field: 'lunch_start',
  },
  lunchEnd: {
    type: DataTypes.TIME,
    allowNull: true,
    field: 'lunch_end',
  },
  notes: DataTypes.TEXT,
  isDefault: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_default',
    comment: 'true = lịch làm việc cài đặt, false = template',
  },
}, {
  tableName: 'schedule',
  timestamps: false,
  underscored: true,
});

Schedule.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Schedule;
