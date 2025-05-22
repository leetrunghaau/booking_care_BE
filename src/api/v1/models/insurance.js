const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user');

const Insurance = db.define('Insurance', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
            model: User,
            key: "id"
        }
    },

    code: DataTypes.STRING(20),

    provider: DataTypes.STRING(255),

    validity: DataTypes.DATEONLY,

}, {
    tableName: 'insurance',
    timestamps: false
});

Insurance.hasOne(User, { foreignKey: "userId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Insurance;
