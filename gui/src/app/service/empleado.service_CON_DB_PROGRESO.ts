import { ListEmpleadoComponent } from './../components/list-empleado/list-empleado.component';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from './../models/empleado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http : HttpClient) { }

  getEmpleados(){
    return this.http.get<Empleado[]>(`${this.baseUrl}`).pipe();
  }
}
