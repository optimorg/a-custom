import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';
<<<<<<< HEAD
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './order-list/order-list.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { CommonModule } from '@angular/common';
=======
<<<<<<< Updated upstream
>>>>>>> 4783c302c70bb3ee88e7544679d1e5b23fafbd97

const routes: Routes = [
=======
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard-component', component: DashboardComponent },
  { path: 'registration-form-component', component: RegistrationFormComponent },
>>>>>>> Stashed changes
  { path: 'log-in-form-component', component: LogInFormComponent },
  { path: 'registration-form-component', component: RegistrationFormComponent },
  { path:'dashboard', component: DashboardComponent },
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'view-orders', component: OrderListComponent },
  { path: 'edit-order/:id', component: EditOrderComponent },
  { path: 'splash-main-component', component: SplashMainComponent },
  { path: '', redirectTo: '/splash-main-component', pathMatch: 'full' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
