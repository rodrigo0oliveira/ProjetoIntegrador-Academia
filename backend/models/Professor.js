class Professor {
  constructor(id, nome, area, academia_id, disponivel) {
    this.id = id;
    this.nome = nome;
    this.area = area;
    this.academia_id = academia_id;
    this.disponivel = disponivel; // true ou false
  }
}

module.exports = Professor;
