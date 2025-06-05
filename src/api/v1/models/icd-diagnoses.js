const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');


const IcdDiagnosis = db.define('icdDiagnosis', {
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
  },

  icdCode: {    //	Mã bệnh ICD (ví dụ: E11, J45, F32.1). Giúp chuẩn hóa và phân loại bệnh theo tiêu chuẩn quốc tế.
    type: DataTypes.STRING(10),
    field: 'icd_code',
    allowNull: true,
  },

  description: {  //	Mô tả chi tiết về bệnh hoặc tình trạng được mã hóa bằng ICD. Có thể là diễn giải rõ hơn cho mã.
    type: DataTypes.TEXT,
    allowNull: true,
  },

  severity: { //	Mức độ nghiêm trọng của bệnh: cấp tính (ngắn hạn, đột ngột) hoặc mãn tính (kéo dài, tái phát).
    type: DataTypes.ENUM('Cấp tính', 'Mãn tính'),
    allowNull: true,
  },

}, {
  tableName: 'icd_diagnoses',
  timestamps: false,
});

IcdDiagnosis.belongsTo(MedicalRecord, { foreignKey: 'medicalRecordId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = IcdDiagnosis;
