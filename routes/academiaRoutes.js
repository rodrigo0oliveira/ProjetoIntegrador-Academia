const express = require('express');
const router = express.Router();
const {
  listarAcademias,
  criarAcademia,
  atualizarAcademia,
  deletarAcademia,
  statusLotacao
} = require('../controllers/academiaController');

router.get('/', listarAcademias);
router.post('/', criarAcademia);
router.put('/:id', atualizarAcademia);
router.delete('/:id', deletarAcademia);
router.get('/:id/status', statusLotacao);

module.exports = router;
