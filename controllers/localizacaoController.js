const { Localizacao } = require('../models');

exports.criarLocalizacao = async (req, res) => {
  try {
    const { endereco, cidade, estado } = req.body;
    const localizacao = await Localizacao.create({ endereco, cidade, estado });
    res.status(201).json(localizacao);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

exports.listarLocalizacoes = async (req, res) => {
  try {
    const localizacoes = await Localizacao.findAll();
    res.json(localizacoes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
