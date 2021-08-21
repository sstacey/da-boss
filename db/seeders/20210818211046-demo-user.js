'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Sterling Archer',
        email: 'sterling@gmail.com',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lana Kane',
        email: 'lana@gmail.com',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cyril Archer',
        email: 'Cyril@gmail.com',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
