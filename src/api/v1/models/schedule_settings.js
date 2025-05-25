const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const ScheduleSetting = db.define("schedule_setting", {
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
    type: DataTypes.JSON, // VD: ["T2", "T3", "T4", "T5", "T6"]
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
    field: "appointment_duration", // phút
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

}, {
  tableName: "schedule_settings",
  timestamps: false,
});

ScheduleSetting.belongsTo(Doctor, { foreignKey: "doctorId" });

module.exports = ScheduleSetting;
