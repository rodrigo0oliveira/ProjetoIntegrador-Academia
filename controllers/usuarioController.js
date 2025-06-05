const usuarios = [];

exports.listarUsuarios = (req, res) => {
  res.json(usuarios);
};

exports.criarUsuario = (req, res) => {
  const { id, nome, email, senha } = req.body;
  usuarios.push({ id, nome, email, senha });
  res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
};
