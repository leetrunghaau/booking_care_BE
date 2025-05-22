const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Hospital = db.define("hospital", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    slug: {
        type: DataTypes.STRING(255),
        comment: "name + id (6 dg)"
    },

    name: DataTypes.STRING(255),

    title: DataTypes.STRING(255),

    info: DataTypes.TEXT,

    address: DataTypes.STRING(255),

    time: DataTypes.JSON,

    license: DataTypes.STRING(128),

    service: DataTypes.JSON,

    img: DataTypes.JSON,

    thumbnail: DataTypes.STRING(255),
    

    lat: DataTypes.DOUBLE,
    log: DataTypes.DOUBLE,


}, {
    tableName: "hospital",
    timestamps: false
})

module.exports = Hospital