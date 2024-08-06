import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedbackService } from '../Services/feedback.service';
import { TaskService } from '../Services/task.service';
import { UserService } from '../Services/user.service';
import { Feedback } from '../models/Feedback';
import { Task } from '../models/Task';
import { User } from '../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-feedback-dialog',
  templateUrl: './create-feedback-dialog.component.html',
  styleUrls: ['./create-feedback-dialog.component.scss']
})
export class CreateFeedbackDialogComponent implements OnInit {
  feedbackForm: FormGroup;
  tasks: Task[] = [];
  users: User[] = [];
  imagePreviews: string[] = []; // Array to hold image previews
  images: File[] = []; // Array to hold selected files

  constructor(
    public dialogRef: MatDialogRef<CreateFeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private feedbackService: FeedbackService,
    private taskService: TaskService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      comment: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });

    this.taskService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });

    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.feedbackForm.valid) {
      const formData = new FormData();
      formData.append('comment', this.feedbackForm.get('comment').value);
      formData.append('rating', this.feedbackForm.get('rating').value);

      // Append selected images to FormData
      this.images.forEach(image => {
        formData.append('images', image);
      });

      this.feedbackService.createFeedback(formData).subscribe(
        (response) => {
          this.dialogRef.close(response);
        },
        (error) => {
          console.error('Error creating feedback:', error);
        }
      );
    }
  }

  setRating(rating: number): void {
    this.feedbackForm.get('rating').setValue(rating);
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    this.images = Array.from(files);

    // Generate previews for selected images
    this.imagePreviews = [];
    Array.from(files).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
}
