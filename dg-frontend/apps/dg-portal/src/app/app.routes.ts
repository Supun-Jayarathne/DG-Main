import { Route, RouterModule } from '@angular/router';
import { NxDashboardComponent } from './nx-dashboard.component';
import { DashboardComponent } from '../../../../libs/shell/src';
import { NgModule } from '@angular/core';

export const appRoutes: Route[] = [
    { path: 'dg-frontend-nx-dashboard', component: NxDashboardComponent },
    { path: 'dg-dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
