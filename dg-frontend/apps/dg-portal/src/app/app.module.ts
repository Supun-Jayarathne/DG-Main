import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxDashboardComponent } from './nx-dashboard.component';
import { DashboardComponent } from '../../../../libs/shell/src';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app.routes';

//dashboard
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';

//Form
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';

//Update Status
//import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent, NxDashboardComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    AppRoutingModule,
    //dashboard
    NoopAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatRadioModule,
    //Form
    FormsModule,
    NgFor,
    //Update Status
   // MatFormFieldModule,

    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
