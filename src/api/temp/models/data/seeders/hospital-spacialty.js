'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Giả sử có 5 hospital và 5 specialty, ta tạo các cặp liên kết ngẫu nhiên
    const hospitalSpecialties = [];

    for (let hospitalId = 1; hospitalId <= 5; hospitalId++) {
      // Mỗi hospital sẽ có từ 1 đến 3 specialty
      const numberOfSpecialties = Math.floor(Math.random() * 3) + 1;

      // Chọn ngẫu nhiên specialtyId (1-5)
      const chosenSpecialtyIds = new Set();
      while (chosenSpecialtyIds.size < numberOfSpecialties) {
        const specialtyId = Math.floor(Math.random() * 5) + 1;
        chosenSpecialtyIds.add(specialtyId);
      }

      for (const specialtyId of chosenSpecialtyIds) {
        hospitalSpecialties.push({
          hospitalId,
          specialtyId,
        });
      }
    }

    await queryInterface.bulkInsert('hospital_specialty', hospitalSpecialties, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
