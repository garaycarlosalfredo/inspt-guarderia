import { Role } from 'src/app/models/role';
import { first } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    currentUser !: Usuario;
    urlAuth = environment.BASE_URL + "/auth/sign-in";
    urlCurrentUser = environment.BASE_URL + "/auth/me";    
    urlAuthSignUp = environment.BASE_URL + "/auth/sign-up";

    constructor(private httpClient : HttpClient,
                private router : Router
        ){ }

    login(userName: String, password: String){
        const AuthenticationRequest = {userName,password}
        this.httpClient.post<Usuario>(`${this.urlAuth}`,AuthenticationRequest).subscribe(            
            res=> { 
                this.currentUser = res; 
                localStorage.setItem('ActualUser', JSON.stringify(this.currentUser));

                var urlIndex = "";

                if(res.role == 'ROLE_ADMIN'){urlIndex = "/administrador"};
                if(res.role == 'ROLE_PARTNER'){urlIndex = "/socio"};
                if(res.role == 'ROLE_EMPLOYEE'){urlIndex = "/empleado"};

                this.router.navigate([urlIndex])
            },
            error=>{
                console.log(error);  
                this.router.navigate(['/'])              
            }
            
        )
    }

    getActualUser(){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
        return this.httpClient.get<Usuario>(`${this.urlCurrentUser}`, {headers})
    }

    getToken(){
        //return this.token
        var usuario = JSON.parse(localStorage['ActualUser'])
        var token = usuario['jwt']
        if(token != null){    
            return token;
        }else{
            console.log("Error en Get token")
            return "";
        }
    }
}