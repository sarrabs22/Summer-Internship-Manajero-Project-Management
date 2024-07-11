import { User } from './User';

export class Project {
    id: string;
    name: string;
    description: string;
    createdBy: User;
    createdDate: Date;
  
    constructor() {
      this.id = '';
      this.name = '';
      this.description = '';
      this.createdBy = new User();
      this.createdDate = new Date();
    }
  }
  