const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');
const Patient = require('./patient');

const Rating = db.define('rating', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  doctorId: {
    type: DataTypes.INTEGER,
    field: "doctor_id",
    references: { model: Doctor, key: "id" }
  },

  patientId: {
    type: DataTypes.INTEGER,
    field: "patient_id",
    references: { model: Patient, key: "id" }
  },

  rating: DataTypes.ENUM('1', '2', '3', '4', '5'),
  value: DataTypes.TEXT

}, {
  tableName: 'rating',
  timestamps: false
});

// Quan hệ
Rating.belongsTo(Patient, { foreignKey: "patientId" , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
Rating.belongsTo(Doctor, { foreignKey: "doctorId" , onDelete: 'CASCADE', onUpdate: 'CASCADE'});

module.exports = Rating;
