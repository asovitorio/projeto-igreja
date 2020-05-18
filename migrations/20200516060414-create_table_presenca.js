'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('presencas', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        membro_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'membros'
            },
            key:'id'
          }
        },
        membro_pessoa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'membros'
            },
            key:'id'
          }
        },
        membro_pequeno_grupo_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'membros'
            },
            key:'id'
          }
        },
        observacao:Sequelize.STRING,
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
      
      });
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('presencas');
  
  }
};
