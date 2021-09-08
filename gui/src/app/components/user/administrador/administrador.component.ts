import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  usuarioActual!: Usuario;
  
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.getActualUser().subscribe(res => {
      this.usuarioActual = res
    });
  }
}
