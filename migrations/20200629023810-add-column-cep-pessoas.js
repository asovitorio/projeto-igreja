'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('pessoas','cep',Sequelize.STRING);
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.removeColumn('pessoas','cep');
    
  }
};
