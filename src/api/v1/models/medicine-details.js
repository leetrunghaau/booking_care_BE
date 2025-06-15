const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const MedicineDetails = db.define('medicineDetails', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: DataTypes.TEXT,

    pack: DataTypes.STRING(100)

}, {
    tableName: 'medicine_details',
    timestamps: false
});

module.exports = MedicineDetails;

