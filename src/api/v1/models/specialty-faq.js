const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Specialty = require('./specialty');

const SpecialtyFaq = db.define('specialtyFaq', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  specialtyId: {
    type: DataTypes.STRING(150),
    field:"specialty_id",
    allowNull: false,
    references:{
        model: Specialty,
        key: "id"
    }
  },

  question: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'specialty_faq',
  timestamps: false,
});
SpecialtyFaq.belongsTo(Specialty,  { foreignKey: 'specialtyId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
module.exports = SpecialtyFaq;
