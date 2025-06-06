const localizacoes = [];

exports.listarLocalizacoes = (req, res) => {
  res.json(localizacoes);
};

exports.criarLocalizacao = (req, res) => {
  const { id, estado, cidade, rua, numero, academia_id } = req.body;
  localizacoes.push({ id, estado, cidade, rua, numero, academia_id });
  res.status(201).json({ mensagem: 'Localização criada com sucesso' });
};
