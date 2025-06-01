'use strict';
const { faker } = require('@faker-js/faker');

function formatTime(hour, fromute) {
  // Định dạng giờ:phút thành "HH:mm:ss"
  return `${String(hour).padStart(2,'0')}:${String(fromute).padStart(2,'0')}:00`;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
       const scheduleSettings = [];

    const NUM_DOCTORS = 10; // giả định có 10 bác sĩ

    for (let doctorId = 1; doctorId <= NUM_DOCTORS; doctorId++) {
      // Giả lập 1 hoặc 2 bản ghi cài đặt (mặc định / template)
      // Bản mặc định:
      const workingDays = faker.number.int({ from: 3, to: 6 });
      const startHour = faker.number.int({ from: 7, to: 9 });
      const endHour = faker.number.int({ from: 16, to: 19 });
      const lunchStartHour = faker.number.int({ from: 11, to: 12 });
      const lunchEndHour = lunchStartHour + 1;
      const appointmentDuration = faker.number.int({ from: 15, to: 60 });
      const appointmentFee = faker.number.int({ from: 100000, to: 500000 });

      scheduleSettings.push({
        doctor_id: doctorId,
        working_days: workingDays,
        start_time: formatTime(startHour, 0),
        end_time: formatTime(endHour, 0),
        appointment_duration: appointmentDuration,
        appointment_fee: appointmentFee,
        has_lunch_break: true,
        lunch_start: formatTime(lunchStartHour, 0),
        lunch_end: formatTime(lunchEndHour, 0),
        is_default: true,
      });

      // Bản template (không mặc định)
      scheduleSettings.push({
        doctor_id: doctorId,
        working_days: workingDays,
        start_time: formatTime(startHour, 0),
        end_time: formatTime(endHour, 0),
        appointment_duration: appointmentDuration,
        appointment_fee: appointmentFee,
        has_lunch_break: false,
        lunch_start: null,
        lunch_end: null,
        is_default: false,
      });
    }

    await queryInterface.bulkInsert('schedule', scheduleSettings, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
