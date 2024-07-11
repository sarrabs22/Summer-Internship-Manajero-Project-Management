import { Task } from './Task';
import { User } from './User';

export class Feedback {
  id: string;
  task: Task;
  givenBy: User;
  comment: string;
  rating: number;

  constructor() {
    this.id = '';
    this.task = new Task();
    this.givenBy = new User();
    this.comment = '';
    this.rating = 0;
  }
}
