import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../Services/task.service';
import { ProjectService } from '../Services/project.service';
import { UserService } from '../Services/user.service';
import { Task } from '../models/Task';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent implements OnInit {
  taskForm: FormGroup;
  projects: Project[] = [];
  users: User[] = [];
  statuses: string[] = ['To Do', 'In Progress', 'Done'];

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    private projectService: ProjectService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      project: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required]
    });

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
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      this.taskService.createTask(newTask).subscribe(
        (response) => {
          this.dialogRef.close(response);
        },
        (error) => {
          console.error('Error creating task:', error);
        }
      );
    }
  }
}