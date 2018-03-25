import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
//import { Response } from '@angular/http';

@Component({ 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  
  //#Any time we use a service in a component, we need to inject it so that we can use it with `this.` as following
  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router//,
   // private response: (success: Response | any)
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {       //#To create the onRegisterSUbmit method in the class of the componetts
    console.log(123);
    console.log(this.name);  //#To get the data being submitted from the form, use `this.` so now they are binded
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };
  
    //#Reqired field 
    if(!this.validateService.validateRegister(user)){
      //console.log("Please fill in all fields");
      this.flashMessage.show("Please fill in all fields", {cssClass: 'alert-danger', timeout: 3000}); //#`.show`will take in the mesasge
      return false;
    } 
    //#Reqired email
    if(!this.validateService.validateEmail(user.email)){
      //console.log("Please use a valid email");
      this.flashMessage.show("Please use a valid email", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } 
// 　　 //#Success
//     if(this.validateService.validateRegister(user)) {
//       //console.log("User data submitted with success");
//       this.flashMessage.show("User data submitted with success", {cssClass: 'alert-success', timeout: 3000});
//       return true;
//     }
    
    //#To register user
    //this.authService.registerUser(user).subscribe(data => {        //#`(user)`: passing in the user object
    this.authService.registerUser(user).then(data => {               //##Error in Part8: change here to fix the error`error TS2339: Property 'success' does not exist on type 'Object'.`
    //if(data.response.success){
      if(data.success){
        this.flashMessage.show("User data submitted with success", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show("Something went wrong", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });   
  }
}
