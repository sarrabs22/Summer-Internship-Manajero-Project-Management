// create-asd-step.component.ts
import { Component } from '@angular/core';
import { ASDStepService } from '../../asdImplementation/Services/asdstep.service';
import { ASDStep } from '../../asdImplementation/models/ASDStep';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ngx-create-asd-step',
  templateUrl: './create-asdstep.component.html',
  styleUrls: ['./create-asdstep.component.scss']
})
export class CreateASDStepComponent {
  newASDStep: ASDStep = new ASDStep();

  constructor(
    private ASDStepService: ASDStepService,
    public dialogRef: MatDialogRef<CreateASDStepComponent>
  ) {}

  onCreate(): void {
    this.ASDStepService.createASDStep(this.newASDStep).subscribe(
      response => {
        this.dialogRef.close(response);
      },
      error => {
        console.error('Error creating ASD step:', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
