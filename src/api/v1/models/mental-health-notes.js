const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const MentalHealthNote = db.define('mentalHealthNote', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  medicalRecordId: {
    type: DataTypes.INTEGER,
    field: 'medical_record_id',
    allowNull: false,
    references: {
      model: MedicalRecord,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },

  assessment: {   // ghi chú đánh giá ban đầu
    type: DataTypes.TEXT,
    allowNull: true,
  },

  diagnosis: {    // chẩn đoán
    type: DataTypes.TEXT,
    allowNull: true,
  },

  therapyPlan: {  // kế hoạch điều trị
    type: DataTypes.TEXT,
    field: 'therapy_plan',
    allowNull: true,
  },
}, {
  tableName: 'mental_health_notes',
  timestamps: false,
});

// Quan hệ
MentalHealthNote.belongsTo(MedicalRecord, {
  foreignKey: 'medicalRecordId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = MentalHealthNote;
