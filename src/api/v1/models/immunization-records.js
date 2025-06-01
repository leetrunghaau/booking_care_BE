const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');

const ImmunizationRecord = db.define('immunizationRecord', {
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

  vaccineName: {
    type: DataTypes.STRING(100),
    field: 'vaccine_name',
    allowNull: true,
  },

  doseNumber: {
    type: DataTypes.INTEGER,
    field: 'dose_number',
    allowNull: true,
  },

  immunizationDate: {
    type: DataTypes.DATEONLY,
    field: 'immunization_date',
    allowNull: true,
  },

  sideEffects: {
    type: DataTypes.TEXT,
    field: 'side_effects',
    allowNull: true,
  },

}, {
  tableName: 'immunization_records',
  timestamps: false,
});

ImmunizationRecord.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = ImmunizationRecord;
