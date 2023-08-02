import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './Welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { authGuard, loginGuard } from '@dg-frontend/shared-assets';
import { ClientCardComponent } from './client-card/client-card.component';
import { AddClientComponent } from './add-client/add-client.component';
import { FooterComponent } from './footer/footer.component';
import { LiveViewComponent } from './LiveView/live-view.component';

export const appRoutes: Route[] = [
  { 
    path: 'login', 
    component: LoginComponent, 
    canActivate: [loginGuard] 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'addClient',
    component: AddClientComponent,
    canActivate: [authGuard],
  },
  {
    path: 'editClient/:id',
    component: AddClientComponent,
    canActivate: [authGuard],
  },
  { path: 'liveView', component: LiveViewComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    NavMenuComponent,
    LoginComponent,
    WelcomeComponent,
    DashboardComponent,
    ClientCardComponent,
    AddClientComponent,
    FooterComponent,
    LiveViewComponent,
  ],
  exports: [
    NavMenuComponent,
    LoginComponent,
    ClientCardComponent,
    AddClientComponent,
    FooterComponent,
    DashboardComponent,
  ],
})
export class ShellModule {}
