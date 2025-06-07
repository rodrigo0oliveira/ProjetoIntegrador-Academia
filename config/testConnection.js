const sequelize = require('./database');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
