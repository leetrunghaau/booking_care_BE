const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const ScheduleTemplate = db.define("schedule_template", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
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

}, {
  tableName: "schedule_templates",
  timestamps: false,
});

module.exports = ScheduleTemplate;
