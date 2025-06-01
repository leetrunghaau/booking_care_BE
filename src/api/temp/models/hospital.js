const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Hospital = db.define("hospital", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  slug: { type: DataTypes.STRING(255), comment: "name + id (6 chữ số)" },
  name: DataTypes.STRING(255),
  title: DataTypes.STRING(255),
  about: { type: DataTypes.TEXT, comment: "Giới thiệu về bệnh viện" },
  address: DataTypes.STRING(255),
  phone: DataTypes.STRING(16),
  license: DataTypes.STRING(128),
  thumbnail: DataTypes.STRING(255),
  img: { type: DataTypes.JSON, comment: "string[]" },
  service: { type: DataTypes.JSON, comment: "string[]" },
  time: {
    type: DataTypes.JSON,
    comment: "Array<{ weekend: 0-6, timeStart: phút, timeEnd: phút }>"
  }
}, {
  tableName: "hospital",
  timestamps: false
});

module.exports = Hospital;
