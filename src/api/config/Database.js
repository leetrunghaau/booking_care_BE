// database.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  timezone: '+07:00'
});


const rs = process.env.DB_RESET

if (rs == 'i') {
  sequelize.sync({ force: true }) 
    .then(() => {

      console.log('Reset database thành công');
    })
    .catch((error) => {
      console.error('Lỗi khi đồng bộ hóa cơ sở dữ liệu:', error);
    });
} else {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Database connection thành công');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });

}





module.exports = sequelize;
