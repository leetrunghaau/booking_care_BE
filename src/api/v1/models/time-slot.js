const { DataTypes } = require("sequelize");
const db = require('../../config/Database');
const Doctor = require('./doctor');

const TimeSlot = db.define('timeSlot', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "doctor_id",
    references: {
      model: Doctor,
      key: "id"
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  },

  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: "Ngày làm việc của bác sĩ"
  },

  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 15, // phút
    comment: "Thời gian mỗi khung (phút)"
  },

  time: {
    type: DataTypes.JSON,
    allowNull: false,
    comment: `Danh sách khung giờ trong ngày dưới dạng:
    [{
      timeStart: number,         // hh:mm => phút (vd: 9:00 => 540)
      status: "booked" | "available" | "locked", // Trạng thái khung giờ
      bookingId: number,         // ID từ bảng booking (không có ràng buộc)
      name: string               // Tên bệnh nhân (truy vấn nhanh)
    }]`
  }

}, {
  tableName: 'time_slots',
  timestamps: false
});

// Thiết lập liên kết với bảng Doctor
TimeSlot.belongsTo(Doctor, { foreignKey: "doctorId" });

module.exports = TimeSlot;
