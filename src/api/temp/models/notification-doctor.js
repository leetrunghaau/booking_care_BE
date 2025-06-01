const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Doctor = require('./doctor');

const NotificationDoctor = db.define('notificationDoctor', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  doctorId: {
    type: DataTypes.INTEGER,
    field: 'doctor_id',
    references: { model: Doctor, key: 'id' },
    allowNull: false,
  },

  type: {
    type: DataTypes.ENUM('general', 'appointment', 'reminder', 'promotion'),
    defaultValue: 'general',
    allowNull: false,
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
    defaultValue: false,
    comment: 'Trạng thái đã đọc hay chưa',
  },

  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  }

}, {
  tableName: 'notification_doctor',
  timestamps: false,
});

NotificationDoctor.belongsTo(Doctor, { foreignKey: 'doctorId' , onDelete: 'CASCADE', onUpdate: 'CASCADE'});

module.exports = NotificationDoctor;
