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
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './Welcome/welcome.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: WelcomeComponent },
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
  ],
  declarations: [
    NavMenuComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  exports: [ NavMenuComponent, LoginComponent],
})
export class ShellModule {}
