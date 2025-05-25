const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const DoctorAccount = db.define('doctorAccount', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: 'doctor_id',
    references: {
      model: Doctor,
      key: "id"
    }
  },

  password: DataTypes.TEXT,

}, {
  tableName: 'doctor_account',
  timestamps: false
});

DoctorAccount.belongsTo(Doctor, {foreignKey: "doctorId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = DoctorAccount;
