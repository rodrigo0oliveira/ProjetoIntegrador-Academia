class Usuario {
  constructor(id, nome, email, senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha; // depois colocar em hash
  }
}

module.exports = Usuario;
