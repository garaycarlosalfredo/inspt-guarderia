import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Usuario } from 'src/app/models/usuario';
import { EmpleadoService } from 'src/app/service/user/empleado/empleado.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent implements OnInit {

  displayedColumns: string[] = ['Nombre','Apellido', 'Dni', 'Email'];
  dataSource = new MatTableDataSource<Usuario>();
  empleados !: Usuario[];

  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor (private empleadoService : EmpleadoService,
               private router : Router
    ) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados(){
    this.empleadoService.getListaEmpleados().pipe(first()).subscribe(
      empleados => {
        this.empleados = empleados
        this.dataSource = new MatTableDataSource<Usuario>(this.empleados);
      },error=>{
        //this.router.navigate(['/'])
        console.log(error)
      }
    )
  } 
}
