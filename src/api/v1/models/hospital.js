const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Hospital = db.define('hospital', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  slug: {
    type: DataTypes.STRING(255),
    allowNull: true,
    comment: 'name + id (6 chữ số)',
  },

  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  title: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  about: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Giới thiệu về bệnh viện',
  },

  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  phone: {
    type: DataTypes.STRING(16),
    allowNull: true,
  },

  license: {
    type: DataTypes.STRING(128),
    allowNull: true,
  },
  mapEmbedUrl: {
    type: DataTypes.TEXT,
    field: "map_embed_url"
  },
  years:
    { type: DataTypes.INTEGER },
  thumbnail: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

}, {
  tableName: 'hospital',
  timestamps: false,
});

module.exports = Hospital;
