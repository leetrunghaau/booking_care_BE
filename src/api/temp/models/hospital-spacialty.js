const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Specialty = require('./specialty');
const Hospital = require('./hospital');

const HospitalSpecialty = db.define("hospitalSpecialty", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  specialtyId: {
    type: DataTypes.INTEGER,
    references: { model: Specialty, key: 'id' }
  },

  hospitalId: {
    type: DataTypes.INTEGER,
    references: { model: Hospital, key: 'id' }
  }
}, {
  tableName: "hospital_specialty",
  timestamps: false
});

HospitalSpecialty.belongsTo(Specialty, { foreignKey: "specialtyId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
HospitalSpecialty.belongsTo(Hospital, { foreignKey: "hospitalId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = HospitalSpecialty;
