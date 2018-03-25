import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { Response } from '@angular/http';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private _http: HttpClient, 
  // private response: Response
  ) { }

    //#This function makes backend API possible to register the POST request
    //registerUser(user) {
  //registerUser(user): {
  registerUser(user): Promise<any>{         //#Error in Part8: change here to fix the error`error TS2339: Property 'success' does not exist on type 'Object'.`
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');   //#To append(attach) content type JSON to headers, send the content type to application/json
    //return this._http.post('http://localhost:3000/users/register', user, {headers: headers});
    return this._http.post('http://localhost:3000/users/register', user, {headers: headers}).toPromise();        //#Error in Part8: change here to fix the error`error TS2339: Property 'success' does not exist on type 'Object'.`
      //.map(res => res.json());
      //.map((res: Response) => res.json());       //#See the Error on the README, JSON is an assumed default and no longer needs to be explicitly parsed in HttpClient Angular2
  } 
   
     //#To create authenticate user service
   //authenticateUser(user): {
   authenticateUser(user): Promise<any>{          //#Error in Part8: change here to fix the error`error TS2339: Property 'success' does not exist on type 'Object'.`
       //#Make a POST request to authenticate
     let headers = new HttpHeaders();
     headers = headers.append('Content-Type', 'application/json');
     //return this._http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
     return this._http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).toPromise();   //#Error in Part8: change here to fix the error`error TS2339: Property 'success' does not exist on type 'Object'.`
     //.map((res: Response) => res.json());
   }

      //#TO create storeUserData function
    storeUserData(token, user){
      localStorage.setItem('id_token', token);
      //localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));  //Local storage can only store string, cannot store an object
      this.authToken = token;
      this.user = user;
    }

      //#To create Logout
    logout(){
      this.authToken = null;
      this.user = null;
      localStorage.clear();
    }
}
