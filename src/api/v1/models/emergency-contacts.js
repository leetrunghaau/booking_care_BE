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

  name: DataTypes.STRING(100),
  relationship: DataTypes.STRING(50),
  phone: DataTypes.STRING(15),
  address: DataTypes.TEXT,


  name: "",
  relationship: "",
  phone: "",
  address: ""

}, {
  tableName: 'emergency_contacts',
  timestamps: false,
});

EmergencyContact.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = EmergencyContact;
