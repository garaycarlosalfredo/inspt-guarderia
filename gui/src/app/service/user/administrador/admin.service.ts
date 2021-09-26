import { Usuario } from './../../../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/role';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlRoles = environment.BASE_URL + "/role";
  urlAuthSignUp = environment.BASE_URL + "/auth/sign-up";

  constructor(private httpClient : HttpClient,
              private authService : AuthService
    ) {}

    signUp(userName: String, 
          password: String,
          role : Role,
          name : String,
          lastName : String,
          dni : Number,
          email : String,
          phone : String ){

      const AuthenticationRequest = {userName,password,name,lastName,email,phone,dni,role}

      return this.httpClient.post<Usuario>(`${this.urlAuthSignUp}`,AuthenticationRequest) /*.subscribe(            
          res=> { 
             console.log("OK")
          },
          error=>{
              console.log(error);        
          }                
      )*/
      
  }

   getRolesList(){   
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.httpClient.get<Role[]>(`${this.urlRoles}`, {headers})
  }
}
