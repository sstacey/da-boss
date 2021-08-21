'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return { ...this.get() }
    }
  }
  Job.init(
    {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Code is required.' },
          notEmpty: { msg: 'Code is required.' },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Code is required.' },
          notEmpty: { msg: 'Code is required.' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Job',
    }
  )
  return Job
}
