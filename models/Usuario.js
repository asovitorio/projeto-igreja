module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pessoa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,

    }, {
      timestamps: true,
      underscored: true,
      paranoide:true,
      tableName: 'usuarios'
      
    }
  );
  Usuario.associate = (models) => {
   Usuario.belongsTo(models.Pessoa, {
      foreignKey: "pessoa_id",
      as: "pessoa",
    });
  };
  return Usuario;
}