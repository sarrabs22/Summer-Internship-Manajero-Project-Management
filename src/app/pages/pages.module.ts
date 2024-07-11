import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AsdComponent } from './agile/asd/asd.component';
import { NbCardModule, NbStepperModule,NbAccordionModule } from '@nebular/theme';
import { AsdImpComponent } from './agile/asdImplementation/asd-imp/asd-imp.component';
import { FormsModule } from '@angular/forms';  // Import Angular FormsModule
import { NbThemeModule, NbLayoutModule, NbListModule, NbInputModule, NbButtonModule, NbSelectModule } from '@nebular/theme';



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
    FormsModule
  ],
  declarations: [
    PagesComponent,
    AsdComponent,
    AsdImpComponent,
  ],
})
export class PagesModule {
}
