/* eslint-disable prefer-destructuring */
import Avatar from './Avatar';

class Users {
  constructor() {
    this.name = '';
    this.genero = '';
    this.avatar = Avatar.acquireAll()[0];
    // () => {
    //   const { acquireAll } = Avatar.acquireAll();
    //   return acquireAll[0];
    // };
    // Avatar.acquireAll()[0];
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
