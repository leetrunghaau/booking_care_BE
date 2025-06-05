const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');
const Booking = require('./booking');

const BookingPrescription = db.define('prescriptions', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  bookingId: {
    type: DataTypes.INTEGER,
    field: 'booking_id',
    references: { model: Booking, key: 'id', },
  },

  name: DataTypes.STRING(100),      // Tên thuốc
  dosage: DataTypes.STRING(50),     // Liều lượng
  usage: DataTypes.TEXT,            // Cách dùng
  duration: DataTypes.INTEGER,   // Thời gian dùng
  notes: DataTypes.TEXT,            // Ghi chú thêm
}, {
  tableName: 'booking_prescriptions',
  timestamps: false,
});

// Thiết lập quan hệ
BookingPrescription.belongsTo(Booking, { foreignKey: 'bookingId', onDelete: 'CASCADE', });
module.exports = BookingPrescription;
