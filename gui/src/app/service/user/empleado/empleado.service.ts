import { Observable , of, from} from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  urlEmpleados = environment.BASE_URL + "/user";

  constructor(private httpClient : HttpClient,
              private authService : AuthService
    ) {}

   getListaEmpleados(){   
     console.log('Bearer ' + this.authService.getToken()) 
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.httpClient.get<Usuario[]>(`${this.urlEmpleados}`, {headers})
  }
}
