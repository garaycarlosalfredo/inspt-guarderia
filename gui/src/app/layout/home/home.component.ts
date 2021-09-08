import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { first } from 'rxjs/operators';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarioActual!: Usuario;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.getActualUser().subscribe(res => {
      this.usuarioActual = res
    });
  }

}
