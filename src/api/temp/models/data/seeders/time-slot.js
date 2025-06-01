'use strict';
const { faker } = require('@faker-js/faker');
function generateTimeSlotsForDay() {
  // tạo ra mảng các khung giờ trong ngày (ví dụ 8:00 - 17:00 mỗi 15 phút)
  // giả sử thời gian làm việc từ 8h đến 17h => 9 tiếng => 36 slots mỗi 15 phút

  const slots = [];
  const startMinutes = 8 * 60; // 8:00 sáng = 480 phút
  const endMinutes = 17 * 60; // 17:00 = 1020 phút
  const duration = 15; // phút mỗi slot

  for (let time = startMinutes; time < endMinutes; time += duration) {
    // trạng thái ngẫu nhiên trong ['available', 'booked', 'locked'], ưu tiên available nhiều hơn
    const status = faker.helpers.arrayElement([
      'available', 'available', 'available', // tăng tỉ lệ available
      'booked',
      'locked'
    ]);

    // Nếu booked thì có bookingId và name, còn nếu không thì null hoặc ''
    const bookingId = status === 'booked' ? faker.number.int({ from: 1, to: 100 }) : null;
    const name = status === 'booked' ? faker.person.fullName() : null;

    slots.push({
      timeStart: time,
      status,
      bookingId,
      name,
    });
  }

  return slots;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
 // Giả sử bạn đã có doctorId từ 1 đến 5
    const doctorCount = 5;
    const daysToGenerate = 7; // 7 ngày từ hôm nay

    const timeSlots = [];

    for (let doctorId = 1; doctorId <= doctorCount; doctorId++) {
      for (let dayOffset = 0; dayOffset < daysToGenerate; dayOffset++) {
        const date = new Date();
        date.setDate(date.getDate() + dayOffset);

        timeSlots.push({
          doctor_id: doctorId,
          date: date.toISOString().split('T')[0], // yyyy-mm-dd
          duration: 15,
          time: JSON.stringify(generateTimeSlotsForDay()),
        });
      }
    }

    await queryInterface.bulkInsert('time_slots', timeSlots, {});
  },

  async down(queryInterface, Sequelize) {

  }
};
