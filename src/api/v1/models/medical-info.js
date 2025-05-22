const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user');

const MedicalInfo = db.define('medical_info', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
            model: User,
            key: "id"
        }
    },

    bloodType: {
        type: DataTypes.STRING(8),
        field: "blood_type"
    },

    height: DataTypes.DOUBLE,

    weight: DataTypes.DOUBLE,

    chronicDiseases: {
        type: DataTypes.STRING(255),
        field: "chronic_diseases"
    },

    allergies: DataTypes.STRING(255),

    medicalHistory: {
        type: DataTypes.STRING(255),
        field: "medical_history"
    },

    vaccinations: DataTypes.STRING(255)

}, {
    tableName: 'medical_info',
    timestamps: false
});

MedicalInfo.hasOne(User, { foreignKey: "userId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = MedicalInfo;
