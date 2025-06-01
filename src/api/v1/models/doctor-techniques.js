const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const DoctorTechnique = db.define('doctorTechnique', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: 'doctor_id',
    allowNull: false,
    references: {
      model: Doctor,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  techniqueName: {
    type: DataTypes.STRING(255),
    field: 'technique_name',
    allowNull: true,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

}, {
  tableName: 'doctor_techniques',
  timestamps: false,
});

DoctorTechnique.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = DoctorTechnique;
