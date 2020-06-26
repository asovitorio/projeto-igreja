module.exports = (sequelize, DataTypes) => {
    const Pessoa = sequelize.define("Pessoa", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          nome: {
    
            type: Sequelize.STRING,
            allowNull: false,
          },
          data_nascimento: {
    
            type: Sequelize.DATE,
            allowNull: true,
          },
          sexo: {
    
            type: Sequelize.STRING,
            allowNull: false,
          },
          telefone: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          image: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          endereco: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          bairro: {
    
            type: Sequelize.STRING,
            allowNull: true,
          },
          cidade: {
    
            type: Sequelize.STRING,
            allowNull: true,
          },
          uf: {
    
            type: Sequelize.STRING,
            allowNull: true,
          },
          create_at: Sequelize.DATE,
          update_at: Sequelize.DATE,
          delete_at: Sequelize.DATE,
    
    },{
      timestamps: true,
      underscored: true,
      paranoide:true,
      tableName: 'pessoas'

    });
    Pessoa.associate = (models) => {
      Pessoa.hasOne(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
      });
    };
    return Pessoa;
};