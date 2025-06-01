const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const DoctorEducation = db.define('doctorEducation', {
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

  degree: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  school: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

}, {
  tableName: 'doctor_educations',
  timestamps: false,
});

DoctorEducation.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = DoctorEducation;
