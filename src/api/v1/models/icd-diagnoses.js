const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');


const IcdDiagnosis = db.define('icdDiagnosis', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  medicalRecordId: {
    type: DataTypes.INTEGER,
    field: 'medical_record_id',
    allowNull: false,
    references: {
      model: MedicalRecord,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  icdCode: {
    type: DataTypes.STRING(10),
    field: 'icd_code',
    allowNull: true,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  severity: {
    type: DataTypes.ENUM('Cấp tính', 'Mãn tính'),
    allowNull: true,
  },

}, {
  tableName: 'icd_diagnoses',
  timestamps: false,
});

IcdDiagnosis.belongsTo(MedicalRecord, { foreignKey: 'medicalRecordId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = IcdDiagnosis;
