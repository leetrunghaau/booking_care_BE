const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM('admin', 'doctor', 'patient'),
    defaultValue: 'patient',
  },
  isLock: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_lock', // ánh xạ với cột DB
  },
  verified: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'user',
  timestamps: false,
});

module.exports = User;
