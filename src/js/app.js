export default class ErrorRepository {
  constructor(code, value) {
    this.map = new Map();

    this.add(code, value);
  }

  add(code, value) {
    this.map.set(code, value);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
