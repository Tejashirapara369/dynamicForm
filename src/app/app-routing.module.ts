import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillUpComponent } from './fill-up/fill-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'', component: SignInComponent},
  {path:'fillup-form', component: FillUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
