import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NxDashboardComponent } from './nx-dashboard.component';
import { AppRoutingModule } from './app.routes';
import { ShellModule } from '@dg-frontend/shell';
import { DataAccessModule } from '@dg-frontend/data-access';

@NgModule({
  declarations: [
    AppComponent, 
    NxDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    ShellModule,
    DataAccessModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
