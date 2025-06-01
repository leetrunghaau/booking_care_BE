const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const DoctorAnalysis = db.define('doctorAnalysis', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: 'doctor_id',
    allowNull: false,
    references: {
      model: Doctor,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },

  title: {
    type: DataTypes.STRING(255),
    allowNull: true,
    comment: 'Tiêu đề nghiên cứu/phân tích'
  },

  publishedAt: {
    type: DataTypes.DATEONLY,
    field: 'published_at',
    allowNull: true,
    comment: 'Ngày công bố'
  },

  journal: {
    type: DataTypes.STRING(255),
    allowNull: true,
    comment: 'Tạp chí công bố (nếu có)'
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Mô tả chi tiết'
  }

}, {
  tableName: 'doctor_analyses',
  timestamps: false
});

DoctorAnalysis.belongsTo(Doctor, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = DoctorAnalysis;
