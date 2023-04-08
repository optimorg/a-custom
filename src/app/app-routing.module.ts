import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';
<<<<<<< Updated upstream

const routes: Routes = [
=======
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'registration-form-component', component: RegistrationFormComponent },
>>>>>>> Stashed changes
  { path: 'log-in-form-component', component: LogInFormComponent },
  { path: 'customer-form-component', component: CustomerFormComponent },
  { path: 'splash-main-component', component: SplashMainComponent },
  { path: '', redirectTo: '/splash-main-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
