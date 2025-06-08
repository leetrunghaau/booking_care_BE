const { DataTypes, STRING } = require('sequelize');
const db = require('../../config/Database');
const Hospital = require('./hospital');
const Specialty = require('./specialty');
const User = require('./user');

const Doctor = db.define('doctor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  slug: {
    type: DataTypes.STRING(255),
    allowNull: true,
    comment: 'name + id (6 digits)'
  },
  code: DataTypes.STRING(64),

  name: {
    type: DataTypes.STRING(20),
    allowNull: true
  },

  phone: {
    type: DataTypes.STRING(16),
    allowNull: true
  },

  email: {
    type: DataTypes.STRING(50),
    allowNull: true
  },

  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },

  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: true
  },

  hospitalId: {
    type: DataTypes.INTEGER,
    field: 'hospital_id',
    allowNull: true,
    references: {
      model: Hospital,
      key: 'id'
    }
  },

  specialtyId: {
    type: DataTypes.INTEGER,
    field: 'specialty_id',
    allowNull: true,
    references: {
      model: Specialty,
      key: 'id'
    }
  },

  rating: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    comment: 'Đánh giá trung bình'
  },

  reviews: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Tổng số lượt đánh giá'
  },

  img: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  about: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Mô tả về bác sĩ'
  },

  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: true,
    references: {
      model: User,
      key: 'id'
    }
  },

  address: {
    type: DataTypes.TEXT,
    allowNull: true
  }

}, {
  tableName: 'doctor',
  timestamps: false
});

// Associations
Doctor.belongsTo(Hospital, {
  foreignKey: 'hospitalId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Doctor.belongsTo(Specialty, {
  foreignKey: 'specialtyId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Doctor.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

module.exports = Doctor;
