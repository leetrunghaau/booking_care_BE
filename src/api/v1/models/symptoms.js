const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Symptom = db.define('symptom', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'symptoms',
  timestamps: false,
});

module.exports = Symptom;
