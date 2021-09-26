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
  userStatusList!: String[];
  actualUserStatus !: String;

  
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    
    this.userStatusList = [
      "home",
      "addUser"
    ];

    this.actualUserStatus = this.userStatusList[0]; 

  

    console.log(this.actualUserStatus)
    this.authService.getActualUser().subscribe(res => {
      this.usuarioActual = res
    });        
  }

  returnStatus(status : number){
      this.actualUserStatus = this.userStatusList[status];
  }

  userChangeStatus(status : number){
    this.actualUserStatus = this.userStatusList[status];
    console.log(this.actualUserStatus)
  }
}
