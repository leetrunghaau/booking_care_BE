const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const DoctorLanguage = db.define('doctorLanguage', {
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

  language: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },

  proficiency: {
    type: DataTypes.ENUM('basic', 'intermediate', 'advanced', 'native'),
    allowNull: true,
  },

}, {
  tableName: 'doctor_languages',
  timestamps: false,
});

DoctorLanguage.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = DoctorLanguage;
