const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const Prescription = db.define('prescriptions', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  medicalRecordId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'medical_record_id',
    references: {
      model: MedicalRecord,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  medicineName: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'medicine_name',
  },

  dosage: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  usage: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  duration: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'prescriptions',
  timestamps: false,
});

// Thiết lập quan hệ
Prescription.belongsTo(MedicalRecord, {
  foreignKey: 'medicalRecordId',
  onDelete: 'CASCADE',
});

module.exports = Prescription;
