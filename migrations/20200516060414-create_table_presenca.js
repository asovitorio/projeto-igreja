'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('presencas', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        data:{
          type: Sequelize.DATE,
          allowNull: false,
            },
        observacao:Sequelize.STRING,
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
      
        
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
        delete_at: Sequelize.DATE,
      
      });
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('presencas');
  
  }
};
