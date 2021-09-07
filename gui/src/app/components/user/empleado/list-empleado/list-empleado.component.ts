import { EmpleadoService } from '../../../../service/empleado.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Empleado } from 'src/app/models/empleado';

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
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleado);
    console.log(this.listEmpleado)
  }
}
