class Users {
  constructor() {
    this.name = '';
    this.genero = '';
  }

  validateName() {
    if ((typeof this.name === 'string') && ((this.name.length !== 0) && (this.name.length <= 40))) {
      return true;
    }
    return false;
  }

  validateGenero() {
    return ['m', 'f'].some((param) => this.genero === param);
  }
}

export default Users;
