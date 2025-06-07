const express = require('express');
const router = express.Router();
const {
  listarUsuarios,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario
} = require('../controllers/usuarioController');

router.get('/', listarUsuarios);
router.post('/', criarUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', deletarUsuario);

module.exports = router;
