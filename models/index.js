const sequelize = require('../config/database');
const Academia = require('./Academia');
const Usuario = require('./Usuario');
const Aviso = require('./Aviso');
const Localizacao = require('./Localizacao');
const Professor = require('./Professor');





module.exports = {
  sequelize,
  Academia,
  Usuario,
  Aviso,
  Localizacao,
  Professor,
};
