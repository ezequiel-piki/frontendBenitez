import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LogginComponent } from './pages/loggin/loggin.component';




@NgModule({
  declarations: [
    LogginComponent
  ],
  imports: [
    CommonModule, 
    AuthRoutingModule, 
    FormsModule
  ],
  providers: []
})
export class AuthModule { }
