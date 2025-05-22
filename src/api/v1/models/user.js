const { DataTypes } = require('sequelize');
const db = require('../../config/Database');


const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  code: {
    type: DataTypes.STRING(20),
    comment: 'BN|BS|ADMIN + ID (6 dg)'

  },

  slug: {
    type: DataTypes.STRING(255),
    comment: "name +  -code"
  },

  img: DataTypes.STRING(255),

  name: {
    type: DataTypes.STRING(20),
  },

  phone: DataTypes.STRING(16),

  email: DataTypes.STRING(50),

  role: DataTypes.ENUM('admin', 'user', 'doctor'),

  birthDate: {
    type: DataTypes.DATEONLY,
    field: 'birth_date'
  },

  gender: DataTypes.ENUM('male', 'female', 'other'),

  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },

  verified: DataTypes.DATE,
}, {
  tableName: 'user',
  timestamps: false
});

module.exports = User;
