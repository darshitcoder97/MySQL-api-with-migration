'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('students',[
    {
        "name": "Senpai",
        "age": "10",
        "email": "rosefuller@entogrok.com",
        "class": "5"
    
    },
    {
        "name": "Yui Rio",
        "age": "12",
        "email": "rosefuller1@entogrok.com",
        "class": "6"
      
    },
    {
        "name": "Yuna Hina",
        "age": "13",
        "email": "rosefuller2@entogrok.com",
        "class": "7"
    
    },
    {
        "name": "Koharu Hinata",
        "email": "rosefuller3@entogrok.com",
        "age": "14",
        "class": "8"
       
    },
    {
        "name": "Mei Mio",
        "age": "10",
        "email": "rosefuller4@entogrok.com",
        "class": "5"
      
    },
    {
        "name": "Saki Miyu",
        "age": "12",
        "email": "rosefuller5@entogrok.com",
        "class": "6"
      
    },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('students',null,{})
}
};
