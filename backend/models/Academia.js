class Academia {
  constructor(id, nome, lotacao_total, status) {
    this.id = id;
    this.nome = nome;
    this.lotacao_total = lotacao_total;
    this.status = status; // "livre", "moderado", "lotado"
    this.usuarios_presentes = usuarios_presentes;
  }
}

module.exports = Academia;
