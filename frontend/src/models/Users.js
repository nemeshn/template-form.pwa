class Users {
  constructor() {
    this.nome = '';
    this.genero = '';
  }

  validateName() {
    if ((typeof this.nome === 'string') && (this.nome.length !== 0) && (this.nome.length <= 40)) {
      return true;
    }
    return false;
  }

  validateGenero() {
    return ['m', 'f'].some((param) => this.genero === param);
  }
}

export default Users;
