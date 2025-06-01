const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    isLock: { type: DataTypes.BOOLEAN, defaultValue: false , field:"is_lock"},
    role: {
        type: DataTypes.ENUM('patient', 'doctor', 'admin'),
        allowNull: false,
        defaultValue: 'patient',
    },

}, {
    tableName: 'user',
    timestamps: false,
});

module.exports = User;
