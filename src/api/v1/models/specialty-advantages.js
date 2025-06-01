const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Specialty = require('./specialty');

const SpecialtyAdvantages = db.define('specialtyAdvantages', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  specialtyId: {
    type: DataTypes.STRING(150),
    field: "specialty_id",
    allowNull: false,
    references: {
      model: Specialty,
      key: "id"
    }
  },


  name: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

}, {
  tableName: 'specialty_advantages',
  timestamps: false,
});

SpecialtyAdvantages.belongsTo(Specialty, {
  foreignKey: 'specialtyId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = SpecialtyAdvantages;
