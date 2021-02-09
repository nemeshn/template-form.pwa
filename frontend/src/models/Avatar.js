class Avatar {
  constructor(index, description) {
    this.index = index; this.description = description;
  }

  static acquireAll() {
    return Array(23).fill(0).map(
      (entry, cont) => new Avatar(cont, `Avatar ${cont + 1}`),
    );
  }

  toString() { return this.description; }
}

export default Avatar;
