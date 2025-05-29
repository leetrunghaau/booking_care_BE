const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const Schedule = db.define("schedule", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: "doctor_id",
    allowNull: false,
    references: {
      model: Doctor,
      key: "id",
    }
  },

  workingDays: {
    type: DataTypes.JSON, 
    field: "working_days",
  },

  startTime: {
    type: DataTypes.TIME,
    field: "start_time",
  },

  endTime: {
    type: DataTypes.TIME,
    field: "end_time",
  },

  appointmentDuration: {
    type: DataTypes.INTEGER,
    field: "appointment_duration", 
  },

  appointmentFee: {
    type: DataTypes.INTEGER,
    field: "appointment_fee",
  },

  hasLunchBreak: {
    type: DataTypes.BOOLEAN,
    field: "has_lunch_break",
    defaultValue: true,
  },

  lunchStart: {
    type: DataTypes.TIME,
    field: "lunch_start",
  },

  lunchEnd: {
    type: DataTypes.TIME,
    field: "lunch_end",
  },

  isDefault: {
    type: DataTypes.BOOLEAN,
    field: "is_default",
    allowNull: false,
    defaultValue: false,
    comment: "true = lịch làm việc cài đặt, false = template"
  }

}, {
  tableName: "schedule",
  timestamps: false,
});

Schedule.belongsTo(Doctor, { foreignKey: "doctorId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Schedule;
