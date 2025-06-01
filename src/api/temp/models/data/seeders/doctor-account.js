'use strict';
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');  
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
     const doctorCount = 5;  // giả sử có 5 bác sĩ
    
    // Tạo mảng doctorAccount
    const doctorAccounts = [];
    
    for (let doctorId = 1; doctorId <= doctorCount; doctorId++) {
      // Tạo password giả (mã hóa bcrypt cho ví dụ, bạn có thể để plain text nếu muốn)
      const plainPassword = faker.internet.password(10);
      const hashedPassword = await bcrypt.hash(plainPassword, 10);
      
      doctorAccounts.push({
        doctor_id: doctorId,
        password: hashedPassword,
      });
    }
    
    await queryInterface.bulkInsert('doctor_account', doctorAccounts, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
