import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { AuthInterceptor } from './Interceptors/auth.interceptor';

@NgModule({
  imports: [CommonModule],
  providers:[authGuard,loginGuard,AuthInterceptor]
})
export class SharedAssetsModule {}
