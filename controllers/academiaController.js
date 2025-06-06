const academias = [];

exports.listarAcademias = (req, res) => {
  res.json(academias);
};

exports.criarAcademia = (req, res) => {
  const { id, nome, lotacao_total, status } = req.body;
  academias.push({ id, nome, lotacao_total, status });
  res.status(201).json({ mensagem: 'Academia criada com sucesso' });
};
exports.atualizarAcademia = (req, res) => {
  const { id } = req.params;
  const { nome, lotacao_total, status, usuarios_presentes  } = req.body;

  const academia = academias.find(a => a.id == id);
  if (!academia) {
    return res.status(404).json({ mensagem: 'Academia não encontrada' });
  }

  // Atualiza os campos, se forem enviados
  if (nome) academia.nome = nome;
  if (lotacao_total) academia.lotacao_total = lotacao_total;
  if (status) academia.status = status;
  if (usuarios_presentes !== undefined) academia.usuarios_presentes = usuarios_presentes;


  res.json({ mensagem: 'Academia atualizada com sucesso', academia });
};

exports.deletarAcademia = (req, res) => {
  const { id } = req.params;
  const index = academias.findIndex(a => a.id == id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Academia não encontrada' });
  }

  academias.splice(index, 1);
  res.json({ mensagem: 'Academia deletada com sucesso' });
};
exports.statusLotacao = (req, res) => {
  const { id } = req.params;
  const academia = academias.find(a => a.id == id);

  if (!academia) {
    return res.status(404).json({ mensagem: 'Academia não encontrada' });
  }

  const { usuarios_presentes, lotacao_total } = academia;
  let status = 'livre';

  const percentual = (usuarios_presentes / lotacao_total) * 100;

  if (percentual >= 90) {
    status = 'lotado';
  } else if (percentual >= 60) {
    status = 'moderado';
  }

  res.json({
    academia_id: academia.id,
    usuarios_presentes,
    lotacao_total,
    percentual_ocupado: `${percentual.toFixed(0)}%`,
    status
  });
};

