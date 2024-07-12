import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedbackService } from '../Services/feedback.service';
import { TaskService } from '../Services/task.service';
import { UserService } from '../Services/user.service';
import { Feedback } from '../models/Feedback';
import { Task } from '../models/Task';
import { User } from '../models/User';

@Component({
  selector: 'app-create-feedback-dialog',
  templateUrl: './create-feedback-dialog.component.html',
  styleUrls: ['./create-feedback-dialog.component.scss']
})
export class CreateFeedbackDialogComponent implements OnInit {
  newFeedback: Feedback = new Feedback();
  tasks: Task[] = [];
  users: User[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateFeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private feedbackService: FeedbackService,
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
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
    this.feedbackService.createFeedback(this.newFeedback).subscribe(
      (response) => {
        this.dialogRef.close(response);
      },
      (error) => {
        console.error('Error creating feedback:', error);
      }
    );
  }
}
