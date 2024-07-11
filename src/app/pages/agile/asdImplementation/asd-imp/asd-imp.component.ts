import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from '../Services/user.service';
import { ProjectService } from '../Services/project.service';
import { TaskService } from '../Services/task.service';
import { FeedbackService } from '../Services/feedback.service';

@Component({
  selector: 'ngx-asd-imp',
  templateUrl: './asd-imp.component.html',
  styleUrls: ['./asd-imp.component.scss']
})
export class  AsdImpComponent{
  newUser: any = {};
  userId: string;
  user: any;

  newProject: any = {};
  projectId: string;
  project: any;

  newTask: any = {};
  taskId: string;
  task: any;

  newFeedback: any = {};
  feedbackId: string;
  feedback: any;

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private feedbackService: FeedbackService
  ) {}

  // User Management
  createUser() {
    this.userService.createUser(this.newUser).subscribe(response => {
      console.log('User created:', response);
    });
  }

  getUser() {
    this.userService.getUserById(this.userId).subscribe(response => {
      this.user = response;
      console.log('User fetched:', response);
    });
  }

  // Project Management
  createProject() {
    this.projectService.createProject(this.newProject).subscribe(response => {
      console.log('Project created:', response);
    });
  }

  getProject() {
    this.projectService.getProjectById(this.projectId).subscribe(response => {
      this.project = response;
      console.log('Project fetched:', response);
    });
  }

  // Task Management
  createTask() {
    this.taskService.createTask(this.newTask).subscribe(response => {
      console.log('Task created:', response);
    });
  }

  getTask() {
    this.taskService.getTaskById(this.taskId).subscribe(response => {
      this.task = response;
      console.log('Task fetched:', response);
    });
  }

  // Feedback Management
  createFeedback() {
    this.feedbackService.createFeedback(this.newFeedback).subscribe(response => {
      console.log('Feedback created:', response);
    });
  }

  getFeedback() {
    this.feedbackService.getFeedbackById(this.feedbackId).subscribe(response => {
      this.feedback = response;
      console.log('Feedback fetched:', response);
    });
  }
}