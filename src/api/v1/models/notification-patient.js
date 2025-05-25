const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');

const NotificationPatient = db.define('notificationPatient', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  patientId: {
    type: DataTypes.INTEGER,
    field: 'patient_id',
    references: { model: Patient, key: 'id' },
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
  tableName: 'notification_patient',
  timestamps: false,
});

NotificationPatient.belongsTo(Patient, { foreignKey: 'patientId' });

module.exports = NotificationPatient;
