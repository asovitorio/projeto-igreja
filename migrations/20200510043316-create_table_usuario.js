'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      Example:
      return queryInterface.createTable('usuarios', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pessoa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'pessoas'
            },
            key:'id'
          }

        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
        delete_at: Sequelize.DATE,
      
      });
  
  },

  down: (queryInterface, Sequelize) => {
   
     

   
      return queryInterface.dropTable('usuarios');
   
  }
};
