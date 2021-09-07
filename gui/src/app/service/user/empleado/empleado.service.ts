import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado : Empleado[]=[]
  urlEmpleados = environment.BASE_URL + "/user";


  constructor(private httpClient : HttpClient,
              private authService : AuthService
    ) {}
/*
  getEmpleados(){    
    return this.listEmpleado.slice();
  }
*/
  getListaEmpleados(){
    
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
    this.httpClient.get<Empleado[]>(`${this.urlEmpleados}`, {headers}).subscribe(            
      res=> {
          console.log(res)
          return res;
      },
      error=>{
          console.log(error);
          return undefined        
      }
      
    )
  }
}
