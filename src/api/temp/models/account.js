const { DataTypes } = require('sequelize');
const db = require('../../config/Database');
const User = require('./user');

const Account = db.define('account', {
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
            key: 'id',
        },
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'account',
    timestamps: false,
});

Account.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Account;
