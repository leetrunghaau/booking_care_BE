'use strict';
const { faker } = require('@faker-js/faker');

function generateSlug(name, id) {
  return name.toLowerCase().replace(/\s+/g, '') + id.toString().padStart(6, '0');
}

function generateCommonDiseases() {
  const diseases = [];
  const count = faker.number.int({ from: 2, to: 5 });
  for (let i = 0; i < count; i++) {
    diseases.push({
      name: faker.word.words(2),
      img: faker.image.urlPicsumPhotos()
    });
  }
  return diseases;
}

function generateAdvantages() {
  const adv = [];
  const count = faker.number.int({ from: 3, to: 7 });
  for (let i = 0; i < count; i++) {
    adv.push(faker.lorem.sentence(3));
  }
  return adv;
}

function generateFaqs() {
  const faqs = [];
  const count = faker.number.int({ from: 2, to: 5 });
  for (let i = 0; i < count; i++) {
    faqs.push({
      question: faker.lorem.sentence(),
      answer: faker.lorem.paragraph()
    });
  }
  return faqs;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
   
  const specialties = [];

    const icons = ['heart', 'brain', 'lungs', 'tooth', 'stethoscope', 'bone', 'eye', 'ear']; // lucide icon examples

    const count = 10; // tạo 10 chuyên khoa giả

    for (let i = 1; i <= count; i++) {
      const name = faker.word.words(2).replace(/^\w/, c => c.toUpperCase());

      specialties.push({
        slug: generateSlug(name, i),
        img: faker.image.urlPicsumPhotos(),
        icon: faker.helpers.arrayElement(icons),
        name,
        title: faker.lorem.sentence(6),
        about: faker.lorem.paragraph(),
        common_diseases: JSON.stringify(generateCommonDiseases()),
        advantages: JSON.stringify(generateAdvantages()),
        faqs: JSON.stringify(generateFaqs()),
      });
    }

    await queryInterface.bulkInsert('specialty', specialties, {});
  },

  async down(queryInterface, Sequelize) {

  }
};
