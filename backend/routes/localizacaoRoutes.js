const express = require('express');
const router = express.Router();
const { listarLocalizacoes, criarLocalizacao } = require('../controllers/localizacaoController');

router.get('/', listarLocalizacoes);
router.post('/', criarLocalizacao);

module.exports = router;
