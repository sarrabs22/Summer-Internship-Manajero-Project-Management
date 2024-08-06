import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../Services/project.service';
import { TaskService } from '../Services/task.service';
import { FeedbackService } from '../Services/feedback.service';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { CreateFeedbackDialogComponent } from '../create-feedback-dialog/create-feedback-dialog.component';
import { Project } from '../models/Project';
import { Feedback } from '../models/Feedback';
import { Task } from '../models/Task';
import { ProjectDetailsDialogComponent } from '../project-details-dialog/project-details-dialog.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  tasks: Task[] = [];
  feedbacks: Feedback[] = [];
feedbackSearchTerm: any;
projectSearchTerm: any;
taskSearchTerm: any;

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    private feedbackService: FeedbackService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadTasks();
    this.loadFeedbacks();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data) => {
        this.projects = data || []; // Ensure an empty array if null
      },
      (error) => {
        console.error('Error loading projects', error);
        this.projects = []; // Fallback to empty array
      }
    );
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(
      (data) => {
        this.tasks = data || []; // Ensure an empty array if null
      },
      (error) => {
        console.error('Error loading tasks', error);
        this.tasks = []; // Fallback to empty array
      }
    );
  }

  loadFeedbacks(): void {
    this.feedbackService.getAllFeedbacks().subscribe(
      (data) => {
        this.feedbacks = data || []; // Ensure an empty array if null
      },
      (error) => {
        console.error('Error loading feedbacks', error);
        this.feedbacks = []; // Fallback to empty array
      }
    );
  }

  viewProjectDetails(project: Project): void {
    this.dialog.open(ProjectDetailsDialogComponent, {
      width: '400px',
      data: project
    });
  }

  viewTaskDetails(task: Task): void {
    // Logic to view task details
  }

  viewFeedbackDetails(feedback: Feedback): void {
    // Logic to view feedback details
  }

  confirmDeleteProject(project: Project): void {
    if (confirm(`Are you sure you want to delete the project "${project.name}"?`)) {
      this.deleteProject(project);
    }
  }

  confirmDeleteTask(task: Task): void {
    if (confirm(`Are you sure you want to delete the task "${task.name}"?`)) {
      this.deleteTask(task);
    }
  }

  confirmDeleteFeedback(feedback: Feedback): void {
    if (confirm(`Are you sure you want to delete this feedback?`)) {
      this.deleteFeedback(feedback);
    }
  }

  deleteProject(project: Project): void {
    this.projectService.deleteProject(project.id).subscribe(() => {
      this.loadProjects();
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteFeedback(feedback: Feedback): void {
    this.feedbackService.deleteFeedback(feedback.id).subscribe(() => {
      this.loadFeedbacks();
    });
  }

  openCreateProjectDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadProjects();
      }
    });
  }

  openCreateTaskDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTasks();
      }
    });
  }

  openCreateFeedbackDialog(): void {
    const dialogRef = this.dialog.open(CreateFeedbackDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFeedbacks();
      }
    });
  }
}
