export class Todo {
  id: number;
  name = '';
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
