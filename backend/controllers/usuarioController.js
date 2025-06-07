const { Usuario } = require('../models');

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, idade } = req.body;
    const usuario = await Usuario.create({ nome, idade });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade } = req.body;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    await usuario.update({ nome, idade });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    await usuario.destroy();
    res.json({ mensagem: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
