const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');
const Patient = require('./patient');

const Rating = db.define('rating', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'doctor_id',
    references: {
      model: Doctor,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },

  patientId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'patient_id',
    references: {
      model: Patient,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
    field: "created_at"
  },
  rating: {
    type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    allowNull: true,
  },

  value: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'rating',
  timestamps: false,
});

// Thiết lập quan hệ
Rating.belongsTo(Doctor, {
  foreignKey: 'doctorId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Rating.belongsTo(Patient, {
  foreignKey: 'patientId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = Rating;
