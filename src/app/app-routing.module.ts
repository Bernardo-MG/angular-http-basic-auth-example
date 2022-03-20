import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
const loginModule = () => import('@app/login/login.module').then(m => m.LoginModule);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: loginModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
