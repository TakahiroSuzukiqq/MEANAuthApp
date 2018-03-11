import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';    //import them
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
 

const appRoutes: Routes = [                //#To declare `appRoutes` `:Routes`  = set `appRoutes` to the type of Routes
  { path: '', component: HomeComponent },  //#To use HomeComponent as the `path: ''` = home
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),    //#To pass in the appRoutes as a Router
    FlashMessagesModule,
    HttpClientModule
  ],
  providers: [ValidateService, FlashMessagesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
