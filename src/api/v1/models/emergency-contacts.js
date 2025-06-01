const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');

const EmergencyContact = db.define('emergencyContact', {
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

  fullName: {
    type: DataTypes.STRING(100),
    field: 'full_name',
    allowNull: true,
  },

  relationship: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },

}, {
  tableName: 'emergency_contacts',
  timestamps: false,
});

EmergencyContact.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = EmergencyContact;
