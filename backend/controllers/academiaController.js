const { Academia } = require('../models');

exports.listarAcademias = async (req, res) => {
  try {
    const academias = await Academia.findAll();
    res.status(200).json(academias);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.criarAcademia = async (req, res) => {
  try {
    const { nome, lotacao_total, status } = req.body;

    if(!nome||!lotacao_total||!status){
      res.status(400).json({erro:"Todos os campos precisam ser preenchidos para criar uma academia"});
    }
    
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

    if(!nome||!lotacao_total||!status||!usuarios_presentes){
      res.status(400).json({erro:"Todos os campos precisam ser preenchidos para atualizar uma academia"});
    }

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
    res.status(204).json({ mensagem: 'Academia deletada com sucesso' });
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
