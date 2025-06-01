const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const NotificationDoctor = db.define('notificationDoctor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  doctorId: {
    type: DataTypes.INTEGER,
    field: 'doctor_id',
    allowNull: false,
    references: {
      model: Doctor,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },

  type: {
    type: DataTypes.ENUM('general', 'appointment', 'reminder', 'promotion'),
    allowNull: false,
    defaultValue: 'general',
    comment: 'Loại thông báo',
  },

  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: 'Tiêu đề thông báo',
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'Nội dung thông báo',
  },

  isRead: {
    type: DataTypes.BOOLEAN,
    field: 'isRead',
    allowNull: true,
    defaultValue: false,
    comment: 'Trạng thái đã đọc hay chưa',
  },

  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: true,
  },
}, {
  tableName: 'notification_doctor',
  timestamps: false,
});

// Quan hệ
NotificationDoctor.belongsTo(Doctor, {
  foreignKey: 'doctorId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = NotificationDoctor;
