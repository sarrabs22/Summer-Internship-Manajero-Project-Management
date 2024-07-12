import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-asd-imp',
  templateUrl: './asd-imp.component.html',
  styleUrls: ['./asd-imp.component.scss']
})
export class  AsdImpComponent{
  newUser: any = {};
  userId: string = '';
  user: any;

  newProject: any = {};
  projectId: string = '';
  project: any;

  newTask: any = {};
  taskId: string = '';
  task: any;

  newFeedback: any = {};
  feedbackId: string = '';
  feedback: any;

  constructor(private http: HttpClient) { }

  createUser() {
    this.http.post('http://localhost:9090/api/users', this.newUser)
      .subscribe(response => {
        console.log('User created:', response);
        this.newUser = {};
      });
  }
  
  getUser() {
    this.http.get(`http://localhost:9090/api/users/${this.userId}`)
      .subscribe(response => {
        this.user = response;
      });
  }
  
  createProject() {
    this.http.post('http://localhost:9090/api/projects', this.newProject)
      .subscribe(response => {
        console.log('Project created:', response);
        this.newProject = {};
      });
  }
  
  getProject() {
    this.http.get(`http://localhost:9090/api/projects/${this.projectId}`)
      .subscribe(response => {
        this.project = response;
      });
  }
  
  createTask() {
    this.http.post('http://localhost:9090/api/tasks', this.newTask)
      .subscribe(response => {
        console.log('Task created:', response);
        this.newTask = {};
      });
  }
  
  getTask() {
    this.http.get(`http://localhost:9090/api/tasks/${this.taskId}`)
      .subscribe(response => {
        this.task = response;
      });
  }
  
  createFeedback() {
    this.http.post('http://localhost:9090/api/feedbacks', this.newFeedback)
      .subscribe(response => {
        console.log('Feedback created:', response);
        this.newFeedback = {};
      });
  }
  
  getFeedback() {
    this.http.get(`http://localhost:9090/api/feedbacks/${this.feedbackId}`)
      .subscribe(response => {
        this.feedback = response;
      });
  }
  
}