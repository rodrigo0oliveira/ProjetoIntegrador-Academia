class Localizacao {
  constructor(id, estado, cidade, rua, numero, academia_id) {
    this.id = id;
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
    this.academia_id = academia_id;
  }
}

module.exports = Localizacao;
