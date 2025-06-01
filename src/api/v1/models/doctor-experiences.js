const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const DoctorExperience = db.define('doctorExperience', {
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

  position: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  organization: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  startYear: {
    type: DataTypes.INTEGER,
    field: 'start_year',
    allowNull: true,
  },

  endYear: {
    type: DataTypes.INTEGER,
    field: 'end_year',
    allowNull: true,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

}, {
  tableName: 'doctor_experiences',
  timestamps: false,
});

DoctorExperience.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = DoctorExperience;
