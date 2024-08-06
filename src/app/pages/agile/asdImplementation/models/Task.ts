export class Task {
  id?: string;
  name: string;
  description: string;
  status?: string;
  priority?: string;
  deadline?: Date;
  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.status = '';
    this.priority = '';
    this.deadline = new Date();
  }
}
