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

  constructor(private httpClient : HttpClient,
              private authService : AuthService
    ) {}

   getRolesList(){   
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.httpClient.get<Role[]>(`${this.urlRoles}`, {headers})
  }
}
