/* eslint-disable prefer-destructuring */
import Avatar from './Avatar';
import Repository from '../infrastructure/Respository';

const repository = new Repository();
const acquireAll = Avatar.acquireAll()[0];

class Users {
  constructor() {
    this.name = '';
    this.genero = '';
    this.avatar = acquireAll;
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

  save(callback) {
    repository.save(this, callback);
  }

  static acquire(sucess, fail) {
    repository.acquire((json) => {
      // eslint-disable-next-line prefer-const
      let user = new Users();
      user.name = json.name;
      user.genero = json.genero;
      user.avatar = new Avatar(
        json.avatar.index,
        json.avatar.description,
      );
      sucess(user);
    }, fail);
  }

  toString() {
    return `${this.name}, ${this.avatar.toString()}`;
  }
}

export default Users;
