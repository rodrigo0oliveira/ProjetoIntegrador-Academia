const { Aviso } = require('../models');

exports.criarAviso = async (req, res) => {
  try {
    const { titulo, mensagem } = req.body;
    const aviso = await Aviso.create({ titulo, mensagem });
    res.status(201).json(aviso);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.listarAvisos = async (req, res) => {
  try {
    const avisos = await Aviso.findAll();
    res.json(avisos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
