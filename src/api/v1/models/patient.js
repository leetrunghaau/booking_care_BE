const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Patient = db.define('patient', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  code: { type: DataTypes.STRING(20), comment: "BN + id (6 dg)" },

  name: DataTypes.STRING(20),
  gender: DataTypes.ENUM('male', 'female', 'other'),
  dob: DataTypes.DATEONLY,

  phone: DataTypes.STRING(16),
  email: DataTypes.STRING(50),
  img: DataTypes.STRING(255),
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  verified: DataTypes.DATE,

  bloodType: { type: DataTypes.STRING(8), field: "blood_type" },
  height: DataTypes.DOUBLE,
  weight: DataTypes.DOUBLE,

  chronicDiseases: { type: DataTypes.JSON, field: "chronic_diseases", comment: "string[]" },
  allergies: DataTypes.STRING(255),

  medicalHistory: { type: DataTypes.JSON, field: "medical_history", comment: "string[]" },
  vaccinations: { type: DataTypes.JSON, comment: "string[]" }
}, {
  tableName: 'patient',
  timestamps: false
});


module.exports = Patient;
