const { Professor } = require('../models');

exports.criarProfessor = async (req, res) => {
  try {
    const { nome, especialidade, telefone } = req.body;
    const professor = await Professor.create({ nome, especialidade, telefone });
    res.status(201).json(professor);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.listarProfessores = async (req, res) => {
  try {
    const professores = await Professor.findAll();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
