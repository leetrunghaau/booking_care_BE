const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Specialty = db.define("specialty", {
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

    img: DataTypes.STRING(255),

    

}, {
    tableName: "specialty",
    timestamps: false
})

module.exports = Specialty