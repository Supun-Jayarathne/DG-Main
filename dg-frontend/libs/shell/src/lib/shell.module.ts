import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './Welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatRadioModule
  ],
  declarations: [
    NavMenuComponent,
    LoginComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  exports: [ NavMenuComponent, LoginComponent],
})
export class ShellModule {}


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { appRoutes } from './app.routes';
// import { NxDashboardComponent } from './nx-dashboard.component';
// import { DashboardComponent } from '../../../../libs/shell/src';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import {MatButtonModule} from '@angular/material/button';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import { AppRoutingModule } from './app.routes';

// //dashboard
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material/card';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatMenuModule } from '@angular/material/menu';
// import {MatRadioModule} from '@angular/material/radio';

// //Form
// import {NgFor} from '@angular/common';
// import {FormsModule} from '@angular/forms';

// //Update Status
// //import {MatFormFieldModule} from '@angular/material/form-field';

// @NgModule({
//   declarations: [
//     AppComponent, NxDashboardComponent, DashboardComponent
//   ],
//   imports: [
//     BrowserModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatButtonModule,
//     MatSidenavModule,
//     AppRoutingModule,
//     //dashboard
//     NoopAnimationsModule,
//     MatCardModule,
//     MatGridListModule,
//     MatMenuModule,
//     MatRadioModule,
//     //Form
//     FormsModule,
//     NgFor,
//     //Update Status
//    // MatFormFieldModule,

//     RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

