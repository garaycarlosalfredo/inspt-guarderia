import { Role } from './../../../../models/role';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../service/user/administrador/admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  rolesList !: Role[];
  hide = true;

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.getRolesList().subscribe(
      res =>{
        
      console.log(res)
        this.rolesList = res
      }
    )
  }

  addNewUser(form: NgForm){
      console.log(form)
  }

}
