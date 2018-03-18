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
  registerUser(user): any{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');   //#To append(attach) content type JSON to headers, send the content type to application/json
    return this._http.post('http://localhost:3000/users/register', user, {headers: headers});
      //.map(res => res.json());
      //.map((res: Response) => res.json());
  } 
}
