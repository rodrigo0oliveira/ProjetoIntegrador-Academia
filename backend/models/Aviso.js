const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Aviso = sequelize.define('Aviso', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Aviso;
