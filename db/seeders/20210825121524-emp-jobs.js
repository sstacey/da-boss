'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('EmpJobs', [
      {
        userId: 1,
        jobId: 1,
        primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        jobId: 2,
        primary: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        jobId: 1,
        primary: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('EmpJobs', null, {})
  },
}
