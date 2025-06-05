const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/academias', require('./routes/academiaRoutes'));
app.use('/usuarios', require('./routes/usuarioRoutes'));
app.use('/professores', require('./routes/professorRoutes'));
app.use('/avisos', require('./routes/avisoRoutes'));
app.use('/localizacoes', require('./routes/localizacaoRoutes'));

app.get('/', (req, res) => {
  res.send('API da Academia tá ON!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
