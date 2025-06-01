const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Disease = db.define('disease', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING(150),
    allowNull: false,
    comment: 'Tên bệnh'
  },

  img: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Hình ảnh minh hoạ (nếu có)'
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Mô tả chi tiết về bệnh'
  }

}, {
  tableName: 'diseases',
  timestamps: false
});

module.exports = Disease;

