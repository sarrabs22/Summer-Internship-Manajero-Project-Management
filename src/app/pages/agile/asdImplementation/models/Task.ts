import { Project } from './Project';
import { User } from './User';


export class Task {
   id?: string;
  name: string;
  description: string;
  project: Project;
  assignedTo: User;
  status?: string;
  dueDate?: Date;

  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.project = new Project();
    this.assignedTo = new User();
    this.status = '';
    this.dueDate = new Date();
  }
}
