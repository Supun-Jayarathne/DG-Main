import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { ClientProjectService } from './services/client-project.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthenticationService,ClientProjectService],
})
export class DataAccessModule {}
