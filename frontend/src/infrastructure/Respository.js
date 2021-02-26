class Repository {
  constructor() {
    this.key = 'aq-user';
  }

  save(json, flowExecution) {
    const data = JSON.stringify(json);
    window.localStorage.setItem(this.key, data);
    flowExecution();
  }

  acquire(sucess, fail) {
    const data = window.localStorage.getItem(this.key);
    const json = JSON.parse(data);
    if (json) { sucess(json); } else { fail(); }
  }
}

export default Repository;
