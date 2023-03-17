import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
<<<<<<< HEAD
import { SplashMainComponent } from './splash-main/splash-main.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';
=======
import { RegistrationFormComponent } from './registration-form/registration-form.component';
>>>>>>> origin/login-page

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInFormComponent,
<<<<<<< HEAD
    SplashMainComponent,
    SignupFormComponent,
    DesignerDashboardComponent
=======
    RegistrationFormComponent
>>>>>>> origin/login-page
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  

 }
