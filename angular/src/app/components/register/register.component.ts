import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

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
  constructor(private validateService: ValidateService) { }

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
  
    //#Reqired field & //#Reqired email
    if(!this.validateService.validateRegister(user)){
      console.log("Please fill in all fields");
      return false;
    } else if(!this.validateService.validateEmail(user.email)){
      console.log("Please fill in all fields");
      return false;
    } else {
      console.log("User data submitted with success");
      return true;
    }
  }
}
