const express = require('express');
const router = express.Router();
const { listarAcademias, criarAcademia } = require('../controllers/academiaController');

router.get('/', listarAcademias);
router.post('/', criarAcademia);

module.exports = router;
