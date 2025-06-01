const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user');

const Patient = db.define('patient', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  code: {
    type: DataTypes.STRING(20),
    allowNull: true,
    comment: 'BN + id (6 chữ số)',
  },

  name: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },

  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: true,
  },

  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },

  phone: {
    type: DataTypes.STRING(16),
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  img: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: true,
  },

  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: true,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },

  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'patient',
  timestamps: false,
});

// Quan hệ
Patient.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = Patient;
