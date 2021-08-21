'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jobs', [
      {
        code: '1',
        name: 'Field Agent',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '2',
        name: 'Director',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '3',
        name: 'Head of Accounting',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '4',
        name: 'Assistant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '5',
        name: 'Head of Human Resources',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '6',
        name: 'Head of Applied Research',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {})
  },
}
