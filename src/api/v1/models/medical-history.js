const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');

const MedicalHistory = db.define('medicalHistory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  patientId: {
    type: DataTypes.INTEGER,
    field: 'patient_id',
    allowNull: false,
    references: {
      model: Patient,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  conditionName: {
    type: DataTypes.STRING(100),
    field: 'condition_name',
    allowNull: true,
  },

  diagnosisDate: {
    type: DataTypes.DATEONLY,
    field: 'diagnosis_date',
    allowNull: true,
  },

  status: {
    type: DataTypes.ENUM('Đang điều trị', 'Đã khỏi', 'Mãn tính'),
    allowNull: true,
  },

  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'medical_history',
  timestamps: false,
});

MedicalHistory.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = MedicalHistory;
