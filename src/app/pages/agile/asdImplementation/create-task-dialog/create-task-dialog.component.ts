import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../Services/task.service';
import { ProjectService } from '../Services/project.service';
import { UserService } from '../Services/user.service';
import { Task } from '../models/Task';
import { Project } from '../models/Project';
import { User } from '../models/User';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {
  newTask: Task = new Task();
  projects: Project[] = [];
  users: User[] = [];
  statuses: string[] = ['To Do', 'In Progress', 'Done']; // Define the possible statuses

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    private projectService: ProjectService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((projects) => {
      this.projects = projects;
    });

    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.taskService.createTask(this.newTask).subscribe(
      (response) => {
        this.dialogRef.close(response);
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );
  }
}
