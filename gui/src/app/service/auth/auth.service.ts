import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    token !: String;
    urlAuth = environment.BASE_URL + "/auth/sign-in";

    constructor(private httpClient : HttpClient,
                private router : Router
        ){ }


    login(userName: String, password: String){
        const AuthenticationRequest = {userName,password}
        this.httpClient.post<{jwt : String}>(`${this.urlAuth}`,AuthenticationRequest).subscribe(            
            res=> {
                this.token = res.jwt
                this.router.navigate(['/empleados'])
            },
            error=>{
                console.log(error);  
                this.router.navigate(['/'])              
            }
            
        )
    }

    getToken(){
        return this.token
    }
}