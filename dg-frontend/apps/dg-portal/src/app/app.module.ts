import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { ShellModule, appRoutes } from '@dg-frontend/shell';
import { DataAccessModule } from '@dg-frontend/data-access';
import { AuthInterceptor } from '@dg-frontend/shared-assets';

export function tokenGetter() { 
  return localStorage.getItem("token"); 
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    ShellModule,
    DataAccessModule,
    RouterModule.forRoot([{path: '', children: appRoutes}], { initialNavigation: 'enabledBlocking' }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7212"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
