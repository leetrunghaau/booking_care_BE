'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const doctors = [];

    // Giả định đã có sẵn 5 bệnh viện và 5 chuyên khoa
    const NUM_DOCTORS = 10;

    for (let i = 1; i <= NUM_DOCTORS; i++) {
      const name = faker.person.fullName();
      const slug = `${name.toLowerCase().replace(/\s+/g, '-')}-${faker.string.alphanumeric(6).toLowerCase()}`;
      const createdAt = faker.date.past();

      doctors.push({
        slug,
        name,
        phone: faker.phone.number('09########'),
        email: faker.internet.email({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] }),
        dob: faker.date.birthdate({ from: 30, to: 50, mode: 'age' }),
        gender: faker.helpers.arrayElement(['male', 'female', 'other']),
        hospital_id: faker.number.int({ from: 1, to: 5 }),
        specialty_id: faker.number.int({ from: 1, to: 5 }),
        created_at: createdAt,
        verified: faker.date.between({ from: createdAt, to: new Date() }),
        rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0 to 5.0
        reviews: faker.number.int({ from: 10, to: 1000 }),
        img: faker.image.avatar(),
        about: faker.lorem.paragraph(),

        education: JSON.stringify([
          {
            degree: "Bác sĩ Chuyên khoa I",
            school: "ĐH Y Dược TP.HCM",
            year: faker.number.int({ from: 2000, to: 2015 }),
          },
        ]),

        technique: JSON.stringify([
          "Nội soi tiêu hóa",
          "Phẫu thuật nội soi",
          "Khám tổng quát"
        ]),

        awards: JSON.stringify([
          {
            title: "Bác sĩ tiêu biểu năm",
            year: faker.number.int({ from: 2010, to: 2022 }),
          },
        ]),

        analysis: JSON.stringify([
          {
            title: faker.lorem.words(4),
            journal: "Y học Việt Nam",
            year: faker.number.int({ from: 2015, to: 2023 }),
          },
        ]),

        experience: JSON.stringify([
          {
            position: "Trưởng khoa Ngoại",
            hospital: "Bệnh viện Bình Dân",
            period: "2016 - 2020",
          },
        ]),

        language: JSON.stringify(["Vietnamese", "English"]),
      });
    }

    await queryInterface.bulkInsert('doctor', doctors, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
