const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuração do Sequelize (ajuste as credenciais do seu banco)
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', 
});

// Testar conexão com o banco
sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Definir modelos básicos (exemplo com base no diagrama ER)
const Usuario = sequelize.define('Usuario', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: Sequelize.STRING,
  email: Sequelize.STRING,
  senha: Sequelize.STRING,
});

const Academia = sequelize.define('Academia', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: Sequelize.STRING,
  lotacao_total: Sequelize.INTEGER,
  status: Sequelize.STRING,
});

const Localizacao = sequelize.define('Localizacao', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  estado: Sequelize.STRING,
  cidade: Sequelize.STRING,
  rua: Sequelize.STRING,
  numero: Sequelize.INTEGER,
});

const Professor = sequelize.define('Professor', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nome: Sequelize.STRING,
  academia_id: Sequelize.INTEGER,
  disponivel: Sequelize.BOOLEAN,
});

const Aviso = sequelize.define('Aviso', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  academia_id: Sequelize.INTEGER,
  mensagem: Sequelize.STRING,
  data: Sequelize.DATE,
});

// Relacionamentos (baseado no diagrama)
Academia.hasMany(Usuario, { foreignKey: 'academia_id' });
Usuario.belongsTo(Academia);
Academia.hasMany(Professor, { foreignKey: 'academia_id' });
Professor.belongsTo(Academia);
Academia.hasMany(Aviso, { foreignKey: 'academia_id' });
Aviso.belongsTo(Academia);
Academia.belongsTo(Localizacao, { foreignKey: 'localizacao_id' });
Localizacao.hasMany(Academia);

// Rota de exemplo
app.get('/api/academias', async (req, res) => {
  try {
    const academias = await Academia.findAll({ include: [Localizacao, Professor, Aviso] });
    res.json(academias);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Sincronizar modelos com o banco (criar tabelas, use com cuidado em produção)
sequelize.sync({ force: false }) // force: true apaga e recria tabelas
  .then(() => console.log('Modelos sincronizados com o banco'))
  .catch(err => console.error('Erro ao sincronizar modelos:', err));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); 
