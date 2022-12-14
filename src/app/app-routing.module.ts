import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
/* import { AuthGuard } from './auth/guards/auth.guard'; */

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'portfolio', loadChildren: () => import('./components/portfolio.module')
      .then(m => m.PortfolioModule)
  },
  //canActivate:[AuthGuard]},

  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: 'portfolio' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
