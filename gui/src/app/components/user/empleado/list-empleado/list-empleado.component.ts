
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/user/empleado/empleado.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  displayedColumns: string[] = ['Nombre','Apellido', 'Dni', 'Email'];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleado !: Empleado[];

  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.cargarEmpleados();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor (private empleadoService : EmpleadoService) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(){
    this.empleadoService.getListaEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleado);
    console.log("Lista " + this.listEmpleado)
  }
}
