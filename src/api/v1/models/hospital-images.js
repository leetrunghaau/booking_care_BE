const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Hospital = require('./hospital');

const HospitalImage = db.define('hospitalImage', {
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

  imageUrl: {
    type: DataTypes.STRING(255),
    field: 'image_url',
    allowNull: true,
  },

}, {
  tableName: 'hospital_images',
  timestamps: false,
});

HospitalImage.belongsTo(Hospital, { foreignKey: 'hospitalId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = HospitalImage;
