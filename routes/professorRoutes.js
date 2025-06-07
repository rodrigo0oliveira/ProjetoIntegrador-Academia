const express = require('express');
const router = express.Router();
const {
  criarProfessor,
  listarProfessores
} = require('../controllers/professorController');

router.post('/', criarProfessor);
router.get('/', listarProfessores);

module.exports = router;
