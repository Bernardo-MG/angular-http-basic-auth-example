import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core/authentication/guard/logged-in.guard';
import { LoggedOutGuard } from './core/authentication/guard/logged-out.guard';

const loginModule = () => import('@app/core/login/login.module').then(m => m.LoginModule);
const businessModule = () => import('@app/business/data.module').then(m => m.DataModule);

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'login', loadChildren: loginModule, canActivate: [LoggedOutGuard] },
  { path: 'data', loadChildren: businessModule, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
