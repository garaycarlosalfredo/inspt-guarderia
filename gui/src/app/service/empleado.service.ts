import { Empleado } from './../models/empleado';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado : Empleado[]=[
    {    userName : "empleado1",
      dni : 300001 ,
      email : "E1Mail@mail.com" ,
      phone : "15-15151515" ,
      name : "E1Name" ,
      lastName : "E1Last" },
      {    userName : "empleado2",
      dni : 300002 ,
      email : "E2Mail@mail.com" ,
      phone : "15-15151515" ,
      name : "E2Name" ,
      lastName : "E2Last" },
      {    userName : "empleado2",
      dni : 300002 ,
      email : "E2Mail@mail.com" ,
      phone : "15-15151515" ,
      name : "E2Name" ,
      lastName : "E2Last" },
      {    userName : "empleado2",
      dni : 300002 ,
      email : "E2Mail@mail.com" ,
      phone : "15-15151515" ,
      name : "E2Name" ,
      lastName : "E2Last" },
      {    userName : "empleado2",
      dni : 300002 ,
      email : "E2Mail@mail.com" ,
      phone : "15-15151515" ,
      name : "E2Name" ,
      lastName : "E2Last" },
      {    userName : "empleado2",
      dni : 300002 ,
      email : "E2Mail@mail.com" ,
      phone : "15-15151515" ,
      name : "E2Name" ,
      lastName : "E2Last" },
      {    userName : "empleado2",
      dni : 300002 ,
      email : "E2Mail@mail.com" ,
      phone : "15-15151515" ,
      name : "E2Name" ,
      lastName : "E2Last" }
  ]

  constructor() { }

  getEmpleados(){
    return this.listEmpleado.slice();
  }
}
