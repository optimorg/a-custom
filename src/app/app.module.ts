import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { DesignerDashboardComponent } from './designer-dashboard/designer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInFormComponent,
    SplashMainComponent,
    SignupFormComponent,
    DesignerDashboardComponent
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
