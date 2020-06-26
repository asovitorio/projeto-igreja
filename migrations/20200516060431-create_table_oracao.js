'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('oracoes', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        discriminacao:{
        type: Sequelize.STRING,
        allowNull: false,

        },
        prioridade:{
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
        pequeno_grupo_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'grupos'
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
    
      return queryInterface.dropTable('oracoes');
   
  }
};
