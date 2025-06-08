const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user');

const Admin = db.define('admin', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING(20),
    allowNull: true
  },

  phone: {
    type: DataTypes.STRING(16),
    allowNull: true
  },

  email: {
    type: DataTypes.STRING(50),
    allowNull: true
  },

  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },

  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: true
  },

  img: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: true,
    references: {
      model: User,
      key: 'id'
    }
  },

  address: {
    type: DataTypes.TEXT,
    allowNull: true
  }


}, {
  tableName: 'admin',
  timestamps: false
});


Admin.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE' 
});

module.exports = Admin;
