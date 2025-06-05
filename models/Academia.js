class Academia {
  constructor(id, nome, lotacao_total, status) {
    this.id = id;
    this.nome = nome;
    this.lotacao_total = lotacao_total;
    this.status = status; // "livre", "moderado", "lotado"
  }
}

module.exports = Academia;
