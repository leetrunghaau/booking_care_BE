const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Disease = require('./diseases');
const Symptom = require('./symptoms');

const DiseaseSymptom = db.define('diseaseSymptom', {
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

  symptomId: {
    type: DataTypes.INTEGER,
    field: 'symptom_id',
    primaryKey: true,
    references: {
      model: Symptom,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }

}, {
  tableName: 'disease_symptoms',
  timestamps: false
});
DiseaseSymptom.belongsTo(Disease, { foreignKey: 'diseaseId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
DiseaseSymptom.belongsTo(Symptom, { foreignKey: 'symptomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = DiseaseSymptom;
