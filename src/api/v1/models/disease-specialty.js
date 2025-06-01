const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Disease = require('./diseases');
const Specialty = require('./specialty');

const DiseaseSpecialty = db.define('diseaseSpecialty', {
  diseaseId: {
    type: DataTypes.INTEGER,
    field: 'disease_id',
    primaryKey: true,
    references: {
      model: Disease,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },

  specialtyId: {
    type: DataTypes.INTEGER,
    field: 'specialty_id',
    primaryKey: true,
    references: {
      model: Specialty,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }

}, {
  tableName: 'disease_specialty',
  timestamps: false
});

DiseaseSpecialty.belongsTo(Disease, { foreignKey: 'diseaseId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
DiseaseSpecialty.belongsTo(Specialty, { foreignKey: 'specialtyId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = DiseaseSpecialty;
