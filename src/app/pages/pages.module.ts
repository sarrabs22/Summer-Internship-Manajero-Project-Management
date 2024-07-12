import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AsdComponent } from './agile/asd/asd.component';



import { DashboardComponent } from './agile/asdImplementation/dashboard/dashboard.component';
import { CreateProjectDialogComponent } from './agile/asdImplementation/create-project-dialog/create-project-dialog.component';
import { CreateTaskDialogComponent } from './agile/asdImplementation/create-task-dialog/create-task-dialog.component';
import { CreateFeedbackDialogComponent } from './agile/asdImplementation/create-feedback-dialog/create-feedback-dialog.component';

import { NbCardModule, NbStepperModule,NbAccordionModule } from '@nebular/theme';
import { AsdImpComponent } from './agile/asdImplementation/asd-imp/asd-imp.component';
import { FormsModule } from '@angular/forms';  // Import Angular FormsModule
import { NbThemeModule, NbLayoutModule, NbListModule, NbInputModule, NbButtonModule, NbSelectModule } from '@nebular/theme';



// Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms'; // Import Angular FormsModule
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbStepperModule,
    NbAccordionModule,

    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
  

    

  ],
  declarations: [
    PagesComponent,
    AsdComponent,
    AsdImpComponent,

    DashboardComponent,
    CreateProjectDialogComponent,
    CreateTaskDialogComponent,
    CreateFeedbackDialogComponent,

  ],
})
export class PagesModule {}
