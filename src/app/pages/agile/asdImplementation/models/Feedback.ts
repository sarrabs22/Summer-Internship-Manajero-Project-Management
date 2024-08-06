export class Feedback {
  id: string;
  comment: string;
  rating: number;
  imageUrls: string[];

  constructor() {
    this.id = '';
    this.comment = '';
    this.rating = 0;
    this.imageUrls = []; 
  }
}
