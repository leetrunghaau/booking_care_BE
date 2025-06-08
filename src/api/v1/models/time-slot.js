const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const TimeSlot = db.define('timeSlot', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'doctor_id',  // map cột DB
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: 'Ngày làm việc của bác sĩ',
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 15,
    comment: 'Thời gian mỗi khung (phút)',
  },
  time: DataTypes.TIME,
}, {
  tableName: 'time_slots',
  timestamps: false,
});

TimeSlot.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = TimeSlot;
