const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Professor = sequelize.define('Professor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Professor;