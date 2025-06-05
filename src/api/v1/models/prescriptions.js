const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const MedicalRecord = require('./medical_records');

const Prescription = db.define('prescriptions', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  medicalRecordId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'medical_record_id',
    references: {
      model: MedicalRecord,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  useStart:{
    type: DataTypes.DATEONLY,
    field:"use_start"
  },
  name: DataTypes.STRING(100),

  dosage: { //	Liều lượng – lượng thuốc cho mỗi lần dùng, ví dụ: “500mg”, “1 viên”.
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  usage: { //	Cách dùng thuốc – uống/truyền/tiêm, trước hay sau ăn, thời điểm dùng trong ngày, v.v.
    type: DataTypes.TEXT,
    allowNull: true,
  },

  duration: { //	Thời gian dùng thuốc, ví dụ: “5 ngày”, “1 tuần”, “2 lần/ngày trong 10 ngày”.
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  notes: {    //	Ghi chú bổ sung – ví dụ: lưu ý tương tác thuốc, cảnh báo cho người bệnh, hoặc chỉ dẫn đặc biệt.
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'prescriptions',
  timestamps: false,
});

// Thiết lập quan hệ
Prescription.belongsTo(MedicalRecord, {
  foreignKey: 'medicalRecordId',
  onDelete: 'CASCADE',
});

module.exports = Prescription;
