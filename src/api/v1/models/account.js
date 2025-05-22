const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user');

const Account = db.define('Account', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    references: {
      model: User,
      key: "id"
    }
  },

  password: DataTypes.TEXT,

}, {
  tableName: 'account',
  timestamps: false
});

Account.hasOne(User, {foreignKey: "userId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Account;
