const express = require('express');
const router = express.Router();
const { listarAvisos, criarAviso } = require('../controllers/avisoController');

router.get('/', listarAvisos);
router.post('/', criarAviso);

module.exports = router;
