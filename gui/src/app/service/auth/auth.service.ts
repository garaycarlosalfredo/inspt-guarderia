import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    private jwt = {};
    urlAuth = environment.BASE_URL + "/auth/sign-in";

    constructor(private httpClient : HttpClient){ }


    login(userName: String, password: String){
        const AuthenticationRequest = {userName,password}
        this.httpClient.post(`${this.urlAuth}`,AuthenticationRequest).subscribe(            
            res=> {
                console.log(res)
            }
        )
    }
}