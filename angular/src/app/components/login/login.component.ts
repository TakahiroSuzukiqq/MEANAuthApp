import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';  //#So that we can redirect
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    //#To add username and password as properties
  username: String;
  password: String;
  
    //#To use the survices imported from other folder we need to inject it
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    console.log(this.username);
      //#When user data are submitted, this function creates the object below
    const user = {
      username: this.username,
      password: this.password
    }

      //#To take above objects and submit it through the authenticate service to the backend authenticate route
      this.authService.authenticateUser(user).subscribe(data => {
      //#To store the authenticateUser data once authenticateUser function make the POST request successful, 
      //that function returns the token for us to store and it also returns user info.
      //#So once authenticateUser function make success we need to store them with into the local storage with below function
    console.log(data);
    if (data.success) {
      //#If user enter the registered user name and pw, then, store the user data and its token into the local db storage
      this.authService.storeUserData(data.token, data.user);
      this.flashMessage.show('You are now logged in', {
        cssClass: 'alert-success', 
        timeout: 5000
      });
      this.router.navigate(['dashboard']);
    } else {
      this.flashMessage.show(data.msg, {
        cssClass: 'alert-danger', 
        timeout: 5000
      });
      this.router.navigate(['login']);  //#To make it redirect the login page
    }
   });

  }

}
