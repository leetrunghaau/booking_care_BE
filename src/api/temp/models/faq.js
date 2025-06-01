const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');
const Doctor = require('./doctor');

const FaQ = db.define('faq', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    patientId: {
        type: DataTypes.INTEGER,
        field: 'patient_id',
        references: { model: Patient, key: 'id' },
        allowNull: false,
    },

    doctorId: {
        type: DataTypes.INTEGER,
        field: 'doctor_id',
        references: { model: Doctor, key: 'id' },
        allowNull: false,
    },

    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    reading: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'faq',
    timestamps: false,
});

// Quan hệ
FaQ.belongsTo(FaQ, { foreignKey: 'patientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
FaQ.belongsTo(FaQ, { foreignKey: 'doctorId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = FaQ;
