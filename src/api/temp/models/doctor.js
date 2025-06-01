const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Hospital = require('./hospital');
const Specialty = require('./specialty');
const User = require('./user');

const Doctor = db.define("doctor", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    references: {
      model: User,
      key: 'id',
    }
  },

  slug: {
    type: DataTypes.STRING(255),
    comment: "name + id (6 dg)"
  },

  name: { type: DataTypes.STRING(20) },
  phone: DataTypes.STRING(16),
  email: DataTypes.STRING(50),
  dob: { type: DataTypes.DATEONLY },
  gender: DataTypes.ENUM('male', 'female', 'other'),

  hospitalId: {
    type: DataTypes.INTEGER,
    field: "hospital_id",
    references: { model: Hospital, key: "id" }
  },
  specialtyId: {
    type: DataTypes.INTEGER,
    field: "specialty_id",
    references: { model: Specialty, key: "id" }
  },

  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  verified: DataTypes.DATE,
  price: DataTypes.DOUBLE,
  duration: {
    type: DataTypes.INTEGER,
    field: "duration",
  },
  rating: {
    type: DataTypes.DOUBLE,
    comment: "đánh giá trung bình"
  },
  reviews: {
    type: DataTypes.INTEGER,
    comment: "tổng số lượt đánh giá"
  },
  img: DataTypes.TEXT,
  about: {
    type: DataTypes.TEXT,
    comment: "mô tả về bác sĩ"
  },
  address: {
    type: DataTypes.TEXT,
    comment: "địa chỉ của bác sĩ"
  },
  education: {
    type: DataTypes.JSON,
    comment: `{degree: string, school: string, year: number}[]`
  },
  technique: {
    type: DataTypes.JSON,
    comment: "string[]"
  },
  awards: {
    type: DataTypes.JSON,
    comment: `{title:string, year: number}[]`
  },
  analysis: {
    type: DataTypes.JSON,
    comment: `{ title: string, journal: string, year: number }[]`
  },
  experience: {
    type: DataTypes.JSON,
    comment: `{position: string, hospital: string, period: string}[]`
  },
  language: {
    type: DataTypes.JSON,
    comment: "string[]"
  }

}, {
  tableName: "doctor",
  timestamps: false
});

Doctor.belongsTo(Hospital, { foreignKey: "hospitalId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Doctor.belongsTo(Specialty, { foreignKey: "specialtyId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Doctor.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE', });

module.exports = Doctor;
