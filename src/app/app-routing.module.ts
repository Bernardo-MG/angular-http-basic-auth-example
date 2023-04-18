import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core/authentication/guard/logged-in.guard';
import { LoggedOutGuard } from './core/authentication/guard/logged-out.guard';
import { CenteredLayoutComponent } from './core/views/containers/centered-layout/centered-layout.component';
import { HeaderLayoutComponent } from './core/views/containers/header-layout/header-layout.component';
import { LoginComponent } from './core/login/containers/login/login.component';

const loginModule = () => import('@app/core/login/login.module').then(m => m.LoginModule);
const businessModule = () => import('@app/business/data.module').then(m => m.DataModule);

const routes: Routes = [
  // Main app
  {
    path: '', component: HeaderLayoutComponent,
    children: [
      // Login
      {
        path: '', component: CenteredLayoutComponent,
        canActivate: [LoggedOutGuard],
        children: [
          {
            path: 'login', component: LoginComponent
          }
        ]
      },
      // Business
      {
        path: 'data', 
        canActivate: [LoggedInGuard],
        children: [
          { path: '', loadChildren: businessModule }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
