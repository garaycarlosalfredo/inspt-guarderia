import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    token !: {jwt : any};
    urlAuth = environment.BASE_URL + "/auth/sign-in";
    
    constructor(private httpClient : HttpClient,
                private router : Router
        ){ }


    login(userName: String, password: String){
        const AuthenticationRequest = {userName,password}
        this.httpClient.post<{jwt : String}>(`${this.urlAuth}`,AuthenticationRequest).subscribe(            
            res=> {
                //this.token = res.jwt         
                localStorage.setItem('ActualUser', res.jwt.toString())
                this.router.navigate(['/empleados'])
            },
            error=>{
                console.log(error);  
                this.router.navigate(['/'])              
            }
            
        )
    }

    getToken(){
        //return this.token
        var tok = localStorage.getItem('ActualUser')
        console.log(tok)

        if(tok != null){       
            return tok;
        }else{
            console.log("Error en Get token")
            return "";
        }
    }
}