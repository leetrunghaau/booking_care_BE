'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   const bookings = [];

    // Giả sử bạn có 10 bệnh nhân và 5 bác sĩ
    const NUM_BOOKINGS = 20;

    for (let i = 0; i < NUM_BOOKINGS; i++) {
      const randomDate = faker.date.soon(30); // ngày trong 30 ngày tới
      const booking = {
        patient_id: faker.number.int({ min: 1, max: 10 }),
        doctor_id: faker.number.int({ min: 1, max: 5 }),
        booking_date: randomDate.toISOString().split('T')[0],
        booking_time: faker.date
          .between('2025-01-01T08:00:00', '2025-01-01T17:00:00')
          .toTimeString()
          .split(' ')[0],
        price: faker.number.int({ min: 200000, max: 500000 }),
        status: faker.helpers.arrayElement(['pending', 'confirmed', 'completed', 'cancelled']),
        notes: faker.lorem.sentence(),
        created_at: faker.date.past(),
      };

      bookings.push(booking);
    }

    await queryInterface.bulkInsert('booking', bookings, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
