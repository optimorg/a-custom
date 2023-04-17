import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './environments/environment';
import { HeaderComponent } from './header/header.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SplashMainComponent } from './splash-main/splash-main.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
<<<<<<< HEAD
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerLoginFormComponent } from './customer-login-form/customer-login-form.component';
import { BusinessLoginFormComponent } from './business-login-form/business-login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
=======
<<<<<<< Updated upstream
=======
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
>>>>>>> Stashed changes
>>>>>>> 4783c302c70bb3ee88e7544679d1e5b23fafbd97

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInFormComponent,
    SplashMainComponent,
<<<<<<< HEAD
    RegistrationFormComponent,
    CustomerFormComponent,
    EditOrderComponent,
    OrderListComponent,
    CustomerLoginFormComponent,
    BusinessLoginFormComponent,
    DashboardComponent
=======
<<<<<<< Updated upstream
    CustomerFormComponent
=======
    CustomerFormComponent,
    RegistrationFormComponent,
    DashboardComponent,
    CalendarComponent,
   
>>>>>>> Stashed changes
>>>>>>> 4783c302c70bb3ee88e7544679d1e5b23fafbd97
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule
  ],
  providers: [
    ScreenTrackingService, UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
