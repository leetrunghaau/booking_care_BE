const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Hospital = require('./hospital');
const Specialty = require('./specialty');
const User = require('./user');

const Doctor = db.define("doctor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    slug: {
        type: DataTypes.STRING(255),
        comment: "name + id (6 dg)"
    },

    userId:{
        type: DataTypes.INTEGER,
        field: "usre_id",
        references: {
            model: User,
            key: "id"
        }
    },

    hospitalId:{
        type: DataTypes.INTEGER,
        field:"hospital_id",
        references:{
            model: Hospital,
            key: "id"
        }
    },

    specialtyId:{
        type: DataTypes.INTEGER,
        field:"specialty_id",
        references:{
            model: Specialty,
            key:"id"
        }
    },

    degree: DataTypes.JSON,

    technique: DataTypes.JSON,

    about: DataTypes.TEXT,

    prize: DataTypes.JSON,

    analysis: DataTypes.JSON,

    experience: DataTypes.JSON,

    language:DataTypes.JSON
    

}, {
    tableName: "doctor",
    timestamps: false
})


Doctor.hasOne(User, {foreignKey:"userId"})
Doctor.hasOne(Hospital, {foreignKey:"hospitalId"})
Doctor.hasOne(Specialty, {foreignKey:"specialtyId"})

module.exports = Doctor