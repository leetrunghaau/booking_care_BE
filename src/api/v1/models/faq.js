const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');
const Doctor = require('./doctor');

const Faq = db.define('faq', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  patientId: {
    type: DataTypes.INTEGER,
    field: 'patient_id',
    allowNull: true,
    references: {
      model: Patient,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: 'doctor_id',
    allowNull: true,
    references: {
      model: Doctor,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },

  question: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  answer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  reading: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: true,
  },

}, {
  tableName: 'faq',
  timestamps: false,
});

Faq.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Faq.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = Faq;
