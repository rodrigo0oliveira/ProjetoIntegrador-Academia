const express = require('express');
const router = express.Router();
const {
  criarLocalizacao,
  listarLocalizacoes
} = require('../controllers/localizacaoController');

router.post('/', criarLocalizacao);
router.get('/', listarLocalizacoes);

module.exports = router;
