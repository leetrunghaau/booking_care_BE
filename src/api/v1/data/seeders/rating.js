'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const ratings = [];

    const NUM_RATINGS = 30;
    const NUM_DOCTORS = 10;  // giả định có 10 bác sĩ
    const NUM_PATIENTS = 10; // giả định có 10 bệnh nhân

    for (let i = 0; i < NUM_RATINGS; i++) {
      ratings.push({
        doctor_id: faker.number.int({ from: 1, to: NUM_DOCTORS }),
        patient_id: faker.number.int({ from: 1, to: NUM_PATIENTS }),
        rating: faker.helpers.arrayElement(['1', '2', '3', '4', '5']),
        value: faker.lorem.sentences(faker.number.int({ from: 1, to: 3 }))
      });
    }

    await queryInterface.bulkInsert('rating', ratings, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
