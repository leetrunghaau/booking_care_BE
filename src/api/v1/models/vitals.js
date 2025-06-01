const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const Vitals = db.define('vitals', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  medical_record_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
          model: MedicalRecord,
          key: 'id',
        },
  },
  temperature: {
    type: DataTypes.DECIMAL(4, 1),
    allowNull: true,
  },
  pulse: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  blood_pressure: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  respiratory_rate: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bmi: {
    type: DataTypes.DECIMAL(4, 1),
    allowNull: true,
  },
  recorded_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'vitals',
  timestamps: false,
});
Vitals.belongsTo(MedicalRecord, { foreignKey: 'medical_record_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Vitals;
