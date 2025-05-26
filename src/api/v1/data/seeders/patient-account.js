'use strict';
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
       const patientCount = 5; // giả sử có 5 patient
    
    const patientAccounts = [];
    for (let patientId = 1; patientId <= patientCount; patientId++) {
      const plainPassword = faker.internet.password(10);
      const hashedPassword = await bcrypt.hash(plainPassword, 10);

      patientAccounts.push({
        patient_id: patientId,
        password: hashedPassword,
      });
    }

    await queryInterface.bulkInsert('patient_account', patientAccounts, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
