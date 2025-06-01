'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
 const hospitals = [];

    const NUM_HOSPITALS = 5;

    for (let i = 1; i <= NUM_HOSPITALS; i++) {
      const name = `Bệnh viện ${faker.location.city()}`;
      const slug = `${name.toLowerCase().replace(/\s+/g, '-')}-${faker.string.numeric(6)}`;
      
      hospitals.push({
        slug,
        name,
        title: `Cơ sở y tế hàng đầu tại ${faker.location.city()}`,
        about: faker.lorem.paragraphs(2),
        address: faker.location.streetAddress({ useFullAddress: true }),
        phone: faker.phone.number('0#########'),
        license: `SĐK-${faker.string.alphanumeric(8).toUpperCase()}`,
        thumbnail: faker.image.urlPicsumPhotos({ width: 640, height: 360 }),
        img: JSON.stringify([
          faker.image.urlPicsumPhotos(),
          faker.image.urlPicsumPhotos(),
          faker.image.urlPicsumPhotos()
        ]),
        service: JSON.stringify([
          "Khám tổng quát",
          "Chẩn đoán hình ảnh",
          "Xét nghiệm máu",
          "Phẫu thuật nội soi"
        ]),
        time: JSON.stringify([
          { weekend: 1, timeStart: 480, timeEnd: 1020 },  // Thứ 2 (8:00 - 17:00)
          { weekend: 2, timeStart: 480, timeEnd: 1020 },  // Thứ 3
          { weekend: 3, timeStart: 480, timeEnd: 1020 },
          { weekend: 4, timeStart: 480, timeEnd: 1020 },
          { weekend: 5, timeStart: 480, timeEnd: 1020 },
          { weekend: 6, timeStart: 480, timeEnd: 960 },   // Thứ 7 (8:00 - 16:00)
        ])
      });
    }

    await queryInterface.bulkInsert('hospital', hospitals, {});
  },

  async down(queryInterface, Sequelize) {

  }
};
