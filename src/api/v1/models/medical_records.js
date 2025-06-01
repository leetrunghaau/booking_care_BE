const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');
const Doctor = require('./doctor');

const MedicalRecord = db.define('medicalRecord', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    patientId: {
        type: DataTypes.INTEGER,
        field: 'patient_id',
        allowNull: false,
        references: {
            model: Patient,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },

    doctorId: {
        type: DataTypes.INTEGER,
        field: 'doctor_id',
        allowNull: true,
        references: {
            model: Doctor,
            key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    },

    visitDate: {
        type: DataTypes.DATEONLY,
        field: 'visit_date',
        allowNull: false,
    },

    reason: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    symptoms: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    diagnosis: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    finalDiagnosis: {
        type: DataTypes.TEXT,
        field: 'final_diagnosis',
        allowNull: true,
    },

    treatmentPlan: {
        type: DataTypes.TEXT,
        field: 'treatment_plan',
        allowNull: true,
    },

    progressNotes: {
        type: DataTypes.TEXT,
        field: 'progress_notes',
        allowNull: true,
    },

    result: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'medical_records',
    timestamps: false,
});

// Quan hệ
MedicalRecord.belongsTo(Patient, {
    foreignKey: 'patientId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

MedicalRecord.belongsTo(Doctor, {
    foreignKey: 'doctorId',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
});

module.exports = MedicalRecord;
