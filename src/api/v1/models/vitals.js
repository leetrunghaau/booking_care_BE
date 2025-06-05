const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const Vitals = db.define('vitals', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  medicalRecordId: {
    type: DataTypes.INTEGER,
    field:"medical_record_id",
    allowNull: false,
    references: {
      model: MedicalRecord,
      key: 'id',
    },
  },
  temperature: { //Nhiệt độ cơ thể (°C), ví dụ: 36.7.
    type: DataTypes.DECIMAL(4, 1),
    allowNull: true,
  },
  pulse: { //Mạch (nhịp tim), đơn vị: nhịp/phút.
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bloodPressure: {   //	Huyết áp, thường ghi ở dạng “Tâm thu/Tâm trương” (VD: "120/80").
    type: DataTypes.STRING(20),
    field: "blood_pressure",
    allowNull: true,
  },
  respiratoryRate: { //Nhịp thở – số lần thở/phút.
    type: DataTypes.INTEGER,
    field: "respiratory_rate",
    allowNull: true,
  },
  bmi: {    //	Chỉ số BMI (Body Mass Index) – chỉ số khối cơ thể.
    type: DataTypes.DECIMAL(4, 1),
    allowNull: true,
  },
  weight: DataTypes.INTEGER,
  height:DataTypes.INTEGER,
  recordedAt: { //	Thời điểm ghi nhận dấu hiệu sinh tồn (mặc định là thời điểm tạo bản ghi).
    type: DataTypes.DATE,
    field: "recorded_at",
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'vitals',
  timestamps: false,
});
Vitals.belongsTo(MedicalRecord, { foreignKey: 'medicalRecordId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Vitals;
