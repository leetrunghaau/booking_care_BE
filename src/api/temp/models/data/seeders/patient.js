'use strict';
const { faker } = require('@faker-js/faker');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   const patients = [];

    const NUM_PATIENTS = 10;

    for (let i = 1; i <= NUM_PATIENTS; i++) {
      const name = faker.person.fullName();
      const createdAt = faker.date.past();
      const dob = faker.date.birthdate({ from: 20, to: 70, mode: 'age' });

      patients.push({
        code: `BN${String(i).padStart(6, '0')}`,
        name,
        gender: faker.helpers.arrayElement(['male', 'female', 'other']),
        dob,
        phone: faker.phone.number('0#########'),
        email: faker.internet.email({ firstName: name.split(' ')[0] }),

        created_at: createdAt,
        verified: faker.date.between({ from: createdAt, to: new Date() }),

        blood_type: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
        height: faker.number.float({ from: 140, to: 190, precision: 0.1 }),
        weight: faker.number.float({ from: 45, to: 100, precision: 0.1 }),

        chronic_diseases: JSON.stringify(faker.helpers.arrayElements([
          'Tiểu đường',
          'Tim mạch',
          'Hen suyễn',
          'Viêm gan B',
          'Huyết áp cao'
        ], faker.number.int({ from: 0, to: 2 }))),

        allergies: faker.helpers.arrayElement([
          'Không có',
          'Phấn hoa',
          'Hải sản',
          'Thuốc kháng sinh',
          'Sữa'
        ]),

        medical_history: JSON.stringify(faker.helpers.arrayElements([
          'Mổ ruột thừa',
          'Tai nạn xe máy',
          'Sốt xuất huyết',
          'Viêm phổi',
          'Gãy tay'
        ], faker.number.int({ from: 0, to: 3 }))),

        vaccinations: JSON.stringify(faker.helpers.arrayElements([
          'Covid-19',
          'Cúm mùa',
          'Viêm gan B',
          'Uốn ván',
          'Sởi - quai bị - rubella'
        ], faker.number.int({ from: 1, to: 4 })))
      });
    }

    await queryInterface.bulkInsert('patient', patients, {});

  },

  async down(queryInterface, Sequelize) {

  }
};
