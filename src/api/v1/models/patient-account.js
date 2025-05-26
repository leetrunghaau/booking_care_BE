const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');

const PatientAccount = db.define('patientAccount', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  patientId: {
    type: DataTypes.INTEGER,
    field: 'patient_id',  // sửa field cho đúng
    references: {
      model: Patient,
      key: "id"
    }
  },

  password: DataTypes.TEXT,

}, {
  tableName: 'patient_account',  // sửa tên bảng đúng
  timestamps: false
});

PatientAccount.belongsTo(Patient, {foreignKey: "patientId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = PatientAccount;
