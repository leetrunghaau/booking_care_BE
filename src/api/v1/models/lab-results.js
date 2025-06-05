const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const LabResult = db.define('labResult', {
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

  testType: {     //Loại xét nghiệm, ví dụ: "Xét nghiệm máu", "Xét nghiệm nước tiểu", "X-quang", "MRI", v.v.
    type: DataTypes.STRING(100),
    field: 'test_type',
    allowNull: true,
  },

  result: {  //Kết quả xét nghiệm dưới dạng văn bản. Có thể ghi rõ chỉ số, đánh giá bác sĩ, v.v.
    type: DataTypes.TEXT,
    allowNull: true,
  },

  testDate: { //	Ngày thực hiện xét nghiệm (không bao gồm giờ). Giúp theo dõi trình tự thực hiện.
    type: DataTypes.DATEONLY,
    field: 'test_date',
    allowNull: true,
  },

  attachmentUrl: { //Đường dẫn tới file đính kèm, như ảnh chụp X-quang, file PDF kết quả, v.v.
    type: DataTypes.STRING(255),
    field: 'attachment_url',
    allowNull: true,
  },
}, {
  tableName: 'lab_results',
  timestamps: false,
});

LabResult.belongsTo(MedicalRecord, { foreignKey: 'medicalRecordId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = LabResult;
