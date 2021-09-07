import { AuthService } from 'src/app/service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  token!:{};

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.token = this.authService.getToken()
  }

}
