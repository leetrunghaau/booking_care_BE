const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const File = db.define('file', {
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

  fileName: {
    type: DataTypes.STRING(255),
    field: 'file_name',
    allowNull: true,
  },

  fileType: {
    type: DataTypes.STRING(50),
    field: 'file_type',
    allowNull: true,
  },

  fileUrl: {
    type: DataTypes.TEXT,
    field: 'file_url',
    allowNull: true,
  },

  uploadedAt: {
    type: DataTypes.DATE,
    field: 'uploaded_at',
    defaultValue: DataTypes.NOW,
  },

}, {
  tableName: 'files',
  timestamps: false,
});

File.belongsTo(MedicalRecord, { foreignKey: 'medicalRecordId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = File;
