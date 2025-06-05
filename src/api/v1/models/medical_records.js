const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Patient = require('./patient');
const Doctor = require('./doctor');
const Booking = require('./booking');

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
    bookingId: {
        type: DataTypes.INTEGER,
        field: 'booking_id',
        allowNull: true,
        references: {
            model: Booking,
            key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    },

    visitDate: {        //	Ngày khám hoặc ngày nhập viện.
        type: DataTypes.DATEONLY,
        field: 'visit_date',
        allowNull: false,
    },

    reason: { //	Lý do bệnh nhân đến khám hoặc nhập viện (ví dụ: đau đầu, sốt, tai nạn...).
        type: DataTypes.TEXT,
        allowNull: true,
    },

    symptoms: { //	Các triệu chứng bệnh nhân mô tả hoặc bác sĩ ghi nhận.
        type: DataTypes.TEXT,
        allowNull: true,
    },

    diagnosis: { //	Chẩn đoán ban đầu hoặc chẩn đoán sơ bộ.
        type: DataTypes.TEXT,
        allowNull: true,
    },

    finalDiagnosis: {  //	Chẩn đoán cuối cùng sau khi có kết quả xét nghiệm, đánh giá chuyên sâu.
        type: DataTypes.TEXT,
        field: 'final_diagnosis',
        allowNull: true,
    },

    treatmentPlan: { //	Kế hoạch điều trị dự kiến, gồm thuốc, liệu pháp, can thiệp y tế...
        type: DataTypes.TEXT,
        field: 'treatment_plan',
        allowNull: true,
    },

    progressNotes: { //	Ghi chú tiến triển bệnh trong quá trình điều trị.
        type: DataTypes.TEXT,
        field: 'progress_notes',
        allowNull: true,
    },

    result: { //	Kết quả cuối cùng của quá trình điều trị (ví dụ: khỏi, ổn định, chuyển viện...).
        type: DataTypes.TEXT,
        allowNull: true,
    },

    notes: { //	Các ghi chú thêm khác, lưu ý đặc biệt của bác sĩ.
        type: DataTypes.TEXT,
        allowNull: true,
    },
    generalInstructions: { //	Các ghi chú chung của sử dụng thuốc
        type: DataTypes.TEXT,
        field: "general_instructions",
        allowNull: true,
    },

    temperature: DataTypes.DECIMAL(4, 1),
    pulse: DataTypes.INTEGER,
    bloodPressure: { type: DataTypes.STRING(20), field: 'blood_pressure' },
    respiratoryRate: { type: DataTypes.INTEGER, field: 'respiratory_rate' },
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,

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
