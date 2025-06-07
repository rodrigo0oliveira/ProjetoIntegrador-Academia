const { Academia } = require('../models');

exports.listarAcademias = async (req, res) => {
  try {
    const academias = await Academia.findAll();
    res.json(academias);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.criarAcademia = async (req, res) => {
  try {
    const { nome, lotacao_total, status } = req.body;
    const academia = await Academia.create({ nome, lotacao_total, status });
    res.status(201).json(academia);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.atualizarAcademia = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, lotacao_total, status, usuarios_presentes } = req.body;
    const academia = await Academia.findByPk(id);
    if (!academia) return res.status(404).json({ erro: 'Academia não encontrada' });
    await academia.update({ nome, lotacao_total, status, usuarios_presentes });
    res.json(academia);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.deletarAcademia = async (req, res) => {
  try {
    const { id } = req.params;
    const academia = await Academia.findByPk(id);
    if (!academia) return res.status(404).json({ erro: 'Academia não encontrada' });
    await academia.destroy();
    res.json({ mensagem: 'Academia deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.statusLotacao = async (req, res) => {
  try {
    const { id } = req.params;
    const academia = await Academia.findByPk(id);
    if (!academia) return res.status(404).json({ erro: 'Academia não encontrada' });
    res.json({ status: academia.status });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};