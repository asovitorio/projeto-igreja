'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('grupos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
  
          type: Sequelize.STRING,
          allowNull: false,
        },
       
        dia_semana: {
            type: Sequelize.STRING,
          allowNull: false,
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
        delete_at: Sequelize.DATE,
      });
      
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('grupos');
  }
};
