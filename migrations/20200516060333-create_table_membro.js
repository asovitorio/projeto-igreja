'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('membros', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        pequeno_grupo_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'pequeno_grupos'
            },
            key:'id'
          }
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'usuarios'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,

      });
   
  },

  down: (queryInterface, Sequelize) => {
   
   
      return queryInterface.dropTable('pequeno_grupo');
   
  }
};
