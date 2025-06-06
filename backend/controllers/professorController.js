const professores = [];

exports.listarProfessores = (req, res) => {
  res.json(professores);
};

exports.criarProfessor = (req, res) => {
  const { id, nome, area, academia_id, disponivel } = req.body;
  professores.push({ id, nome, area, academia_id, disponivel });
  res.status(201).json({ mensagem: 'Professor criado com sucesso' });
};
