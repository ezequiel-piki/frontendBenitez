import { NgModule }             from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LogginComponent }      from './pages/loggin/loggin.component';


const routes : Routes = [
  {
    path:'',
    children:[{path:'login',component :LogginComponent},
              {path:'**',   redirectTo:'login'}]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
