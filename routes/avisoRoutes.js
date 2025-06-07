const express = require('express');
const router = express.Router();
const { criarAviso, listarAvisos } = require('../controllers/avisoController');

router.post('/', criarAviso);
router.get('/', listarAvisos);

module.exports = router;
