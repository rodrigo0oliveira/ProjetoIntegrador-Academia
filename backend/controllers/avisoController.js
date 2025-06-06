const avisos = [];

exports.listarAvisos = (req, res) => {
  res.json(avisos);
};

exports.criarAviso = (req, res) => {
  const { id, academia_id, mensagem, data } = req.body;
  avisos.push({ id, academia_id, mensagem, data });
  res.status(201).json({ mensagem: 'Aviso criado com sucesso' });
};
