const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Booking = require('./booking');

const BookingFile = db.define('bookingFile', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  bookingId: {
    type: DataTypes.INTEGER,
    field: 'booking_id',
    references: { model: Booking, key: 'id' }
  },

  name: DataTypes.STRING(255),
  type: DataTypes.STRING(50),
  url: DataTypes.TEXT,

}, {
  tableName: 'booking_file',
  timestamps: false,
});

BookingFile.belongsTo(Booking, {  foreignKey: 'bookingId',  onDelete: 'CASCADE',  onUpdate: 'CASCADE',})
module.exports = BookingFile;
