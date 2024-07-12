import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../Services/project.service';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.css']
})
export class CreateProjectDialogComponent {
  newProject: any = {};

  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    private projectService: ProjectService
  ) {}

  onCreate(): void {
    this.projectService.createProject(this.newProject).subscribe(response => {
      this.dialogRef.close(response);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
