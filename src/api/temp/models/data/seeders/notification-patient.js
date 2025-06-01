'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
 const notifications = [];

    const NUM_NOTIFICATIONS = 30;
    const NUM_PATIENTS = 10; // Giả định đã có 10 bệnh nhân

    for (let i = 0; i < NUM_NOTIFICATIONS; i++) {
      const createdAt = faker.date.recent({ days: 20 });

      notifications.push({
        patient_id: faker.number.int({ from: 1, to: NUM_PATIENTS }),
        type: faker.helpers.arrayElement(['general', 'appointment', 'reminder', 'promotion']),
        title: faker.lorem.sentence(5),
        message: faker.lorem.paragraph(),
        isRead: faker.datatype.boolean(),
        created_at: createdAt,
      });
    }

    await queryInterface.bulkInsert('notification_patient', notifications, {});
  },

  async down(queryInterface, Sequelize) {

  }
};
