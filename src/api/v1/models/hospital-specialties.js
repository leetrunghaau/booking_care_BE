const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Hospital = require('./hospital');
const Specialty = require('./specialty');

const HospitalSpecialty = db.define('hospitalSpecialty', {
  hospitalId: {
    type: DataTypes.INTEGER,
    field: 'hospital_id',
    primaryKey: true,
    references: {
      model: Hospital,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  specialtyId: {
    type: DataTypes.INTEGER,
    field: 'specialty_id',
    primaryKey: true,
    references: {
      model: Specialty,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

}, {
  tableName: 'hospital_specialties',
  timestamps: false,
});
HospitalSpecialty.belongsTo(Hospital, { foreignKey: 'hospitalId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
HospitalSpecialty.belongsTo(Specialty, { foreignKey: 'specialtyId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });



module.exports = HospitalSpecialty;
