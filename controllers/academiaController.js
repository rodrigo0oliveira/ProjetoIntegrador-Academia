const academias = [];

exports.listarAcademias = (req, res) => {
  res.json(academias);
};

exports.criarAcademia = (req, res) => {
  const { id, nome, lotacao_total, status } = req.body;
  academias.push({ id, nome, lotacao_total, status });
  res.status(201).json({ mensagem: 'Academia criada com sucesso' });
};
