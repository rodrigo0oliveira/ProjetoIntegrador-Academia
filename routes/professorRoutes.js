const express = require('express');
const router = express.Router();
const { listarProfessores, criarProfessor } = require('../controllers/professorController');

router.get('/', listarProfessores);
router.post('/', criarProfessor);

module.exports = router;
