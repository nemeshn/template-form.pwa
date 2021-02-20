class Avatar {
  constructor(index, description) {
    this.index = index; this.description = description;
  }

  toString() {
    return this.description;
  }

  static acquireAll() {
    // eslint-disable-next-line arrow-body-style
    return Array(23).fill(0).map((entry, cont) => {
      return new Avatar(cont, `Avatar ${cont + 1}`);
    });
  }
}

export default Avatar;
