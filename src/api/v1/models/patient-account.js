const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');

const PantientAccount = db.define('pantientAccount', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  pantientId: {
    type: DataTypes.INTEGER,
    field: 'Patient',
    references: {
      model: Patient,
      key: "id"
    }
  },

  password: DataTypes.TEXT,

}, {
  tableName: 'pantient_account',
  timestamps: false
});

PantientAccount.belongsTo(Patient, {foreignKey: "pantientId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = PantientAccount;
