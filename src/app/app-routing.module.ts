import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';

const routes: Routes = [
  { path: 'log-in-form-component', component: LogInFormComponent },
  { path: 'customer-form-component', component: CustomerFormComponent },
  { path: 'splash-main-component', component: SplashMainComponent },
  { path: '', redirectTo: '/splash-main-component', pathMatch: 'full' }
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: 'log-in-form-component', component: LogInFormComponent },
  { path: 'registration-form-component', component: RegistrationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
