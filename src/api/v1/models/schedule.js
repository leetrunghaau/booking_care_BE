const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const Schedule= db.define("schedule", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: "doctor_id",
    allowNull: false,
    references: {
      model: Doctor,
      key: "id",
    }
  },

  date: DataTypes.DATEONLY,

  times: DataTypes.JSON  //{time: number, avalible: bool}[]

}, {
  tableName: "schedule",
  timestamps: false,
});

Schedule.belongsTo(Doctor, { foreignKey: "doctorId" , onDelete: 'CASCADE', onUpdate: 'CASCADE'});

module.exports = Schedule;
