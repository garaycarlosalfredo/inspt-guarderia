import { Role } from './../../../../models/role';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../service/user/administrador/admin.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  rolesList !: Role[];
  selectedRole !: Role;
  hide = true;

  constructor(private adminService : AdminService
    ) { }

  ngOnInit(): void {
    this.adminService.getRolesList().subscribe(
      res =>{
        
      //console.log(res)
        this.rolesList = res
      }
    )
  }

  addNewUser(form: NgForm){
    console.log(this.selectedRole)
    console.log(form.value.name)
    console.log(form)
    this.adminService.signUp
    ( form.value.userName, 
      form.value.password,
      form.value.name ,
      form.value.lastName,
      form.value.email,
      form.value.phone,
      form.value.dni,
      form.value.role
      )
      
  }

}
