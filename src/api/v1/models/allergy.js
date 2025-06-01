const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient'); // Đảm bảo bạn đã có file patient.js và export model Patient

const Allergy = db.define('allergy', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  patientId: {
    type: DataTypes.INTEGER,
    field: 'patient_id',
    allowNull: false,
    references: {
      model: Patient,
      key: 'id'
    }
  },

  allergen: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'Chất gây dị ứng'
  },

  reaction: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Phản ứng với chất gây dị ứng'
  },

  severity: {
    type: DataTypes.ENUM('Nhẹ', 'Vừa', 'Nặng'),
    allowNull: true,
    comment: 'Mức độ nghiêm trọng của dị ứng'
  },

  notedDate: {
    type: DataTypes.DATEONLY,
    field: 'noted_date',
    allowNull: true,
    comment: 'Ngày ghi nhận dị ứng'
  }

}, {
  tableName: 'allergies',
  timestamps: false
});

Allergy.belongsTo(Patient, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = Allergy;
