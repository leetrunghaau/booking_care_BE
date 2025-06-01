const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const LabResult = db.define('labResult', {
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

  testType: {
    type: DataTypes.STRING(100),
    field: 'test_type',
    allowNull: true,
  },

  result: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  testDate: {
    type: DataTypes.DATEONLY,
    field: 'test_date',
    allowNull: true,
  },

  attachmentUrl: {
    type: DataTypes.STRING(255),
    field: 'attachment_url',
    allowNull: true,
  },
}, {
  tableName: 'lab_results',
  timestamps: false,
});

LabResult.belongsTo(MedicalRecord, { foreignKey: 'medicalRecordId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = LabResult;
