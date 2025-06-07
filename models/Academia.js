const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Academia = sequelize.define('Academia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lotacao_total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuarios_presentes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'academias',
  timestamps: false,
});

module.exports = Academia;
