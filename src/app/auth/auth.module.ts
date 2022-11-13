import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LogginComponent } from './pages/loggin/loggin.component';
import { interceptorProvider } from './services/interceptor.service';




@NgModule({
  declarations: [
    LogginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [interceptorProvider]
})
export class AuthModule { }
