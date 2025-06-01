const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const Hospital = require('./hospital');

const HospitalTime = db.define('hospitalTime', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  hospitalId: {
    type: DataTypes.INTEGER,
    field: 'hospital_id',
    allowNull: false,
    references: {
      model: Hospital,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },

  weekend: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: '0-6, 0 = Chủ nhật',
  },
  timeStart: {
    type: DataTypes.INTEGER,
    field: 'time_start',
    allowNull: true,
    comment: 'Thời gian bắt đầu tính theo phút trong ngày',
  },

  timeEnd: {
    type: DataTypes.INTEGER,
    field: 'time_end',
    allowNull: true,
    comment: 'Thời gian kết thúc tính theo phút trong ngày',
  },

}, {
  tableName: 'hospital_times',
  timestamps: false,
});
HospitalTime.belongsTo(Hospital, { foreignKey: 'hospitalId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });



module.exports = HospitalTime;
