'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const notifications = [];

    const NUM_NOTIFICATIONS = 20;
    const NUM_DOCTORS = 10; // Giả định bạn đã có 10 bác sĩ trong bảng doctor

    for (let i = 0; i < NUM_NOTIFICATIONS; i++) {
      const createdAt = faker.date.recent(15); // Trong 15 ngày gần đây

      notifications.push({
        doctor_id: faker.number.int({ from: 1, to: NUM_DOCTORS }),
        type: faker.helpers.arrayElement(['general', 'appointment', 'refromder', 'promotion']),
        title: faker.lorem.sentence(6),
        message: faker.lorem.paragraph(),
        isRead: faker.datatype.boolean(),
        created_at: createdAt
      });
    }

    await queryInterface.bulkInsert('notification_doctor', notifications, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
