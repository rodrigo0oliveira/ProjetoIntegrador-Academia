const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Localizacao = sequelize.define('Localizacao', {
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Localizacao;
