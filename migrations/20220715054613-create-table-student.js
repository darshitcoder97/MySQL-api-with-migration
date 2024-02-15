'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('students',
    {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              msg: "Email formet wrong",
            },
          },
          unique: true,
        },
        class: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 12,
          },
      },
    },
      {
        timestamps: false,
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};
