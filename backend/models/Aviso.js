class Aviso {
  constructor(id, academia_id, mensagem, data) {
    this.id = id;
    this.academia_id = academia_id;
    this.mensagem = mensagem;
    this.data = data; // ISO string ou Date
  }
}

module.exports = Aviso;
