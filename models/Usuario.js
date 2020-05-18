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
      tipo: {
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
      create_at: DataTypes.DATE,
      update_at: DataTypes.DATE,

    }, {
      tableName:'produto',
      timestamps: true,
    }
  );
  Usuario.associate = (models) => {
    Pessoa.belongsTo(models.Usuario, {
      foreignKey: "pessoa_id",
      as: "pessoa",
    });
  };
  return Usuario;
}