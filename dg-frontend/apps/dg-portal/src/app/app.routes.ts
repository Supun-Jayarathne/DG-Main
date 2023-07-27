import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NxDashboardComponent } from './nx-dashboard.component';
import { LoginComponent,DashboardComponent } from '@dg-frontend/shell';

export const appRoutes: Route[] = [
    { path: 'Login', component: LoginComponent },
    { path: 'dg-frontend-nx-dashboard', component: NxDashboardComponent },
    { path: 'dg-dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
