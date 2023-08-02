import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

@NgModule({
  imports: [CommonModule],
  providers:[authGuard,loginGuard]
})
export class SharedAssetsModule {}
