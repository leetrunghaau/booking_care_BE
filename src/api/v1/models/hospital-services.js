const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Hospital = require('./hospital');

const HospitalService = db.define('hospitalService', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  hospitalId: {
    type: DataTypes.INTEGER,
    field: 'hospital_id',
    allowNull: false,
    references: {
      model: Hospital,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  serviceName: {
    type: DataTypes.STRING(255),
    field: 'service_name',
    allowNull: true,
  },

}, {
  tableName: 'hospital_services',
  timestamps: false,
});

HospitalService.belongsTo(Hospital, { foreignKey: 'hospitalId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = HospitalService;
