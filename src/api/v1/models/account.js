const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user'); // Đảm bảo bạn có file user.js và export model User

const Account = db.define('account', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    references: {
      model: User,
      key: 'id'
    },
    allowNull: true
  },

  pass: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Mật khẩu người dùng (có thể đã mã hoá)'
  }

}, {
  tableName: 'account',
  timestamps: false
});

// Quan hệ
Account.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Account;
