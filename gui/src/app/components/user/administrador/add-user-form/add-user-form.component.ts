import { Role } from './../../../../models/role';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AdminService } from '../../../../service/user/administrador/admin.service';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  rolesList !: Role[];
  selectedRole !: Role;
  hide = true;

  loginFormGroup!: FormGroup;
  personalFormGroup!: FormGroup;
  contactFormGroup !: FormGroup;
  isEditable = true;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private adminService : AdminService,
              private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar
    ) { }
  
  @Output() statusOut = new EventEmitter(); 

  onStatusChange(status : number){
      this.statusOut.emit(status);
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      userNameCtrl: ['', Validators.required],      
      passwordCtrl: ['', Validators.required],      
      roleCtrl: ['', Validators.required]
    });
    this.personalFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],      
      lastNameCtrl: ['', Validators.required],      
      dniCtrl: ['', Validators.required]
    });
    this.contactFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required],      
      phoneCtrl: ['', Validators.required]
    });

    this.adminService.getRolesList().subscribe(
      res =>{
        
      //console.log(res)
        this.rolesList = res
      }
    )
  }

  openSnackBar(msg : String, statusOk : Boolean) {
    let panelCollor = [];


    if(statusOk){ 
      panelCollor = ['mat-toolbar', 'mat-primary'] 
    }else{
      panelCollor = ['mat-toolbar', 'mat-warn']
    };

    this._snackBar.open("Se creó correctamente el usuario : " + msg.toString(), 'Confirmar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,      
      duration: 5 * 1000,
      panelClass : panelCollor
    });
  }

  addNewUser(){

    this.adminService.signUp( this.loginFormGroup.value.userNameCtrl, 
                              this.loginFormGroup.value.passwordCtrl,
                              this.loginFormGroup.value.roleCtrl,
                              this.personalFormGroup.value.nameCtrl,
                              this.personalFormGroup.value.lastNameCtrl,
                              this.personalFormGroup.value.dniCtrl,
                              this.contactFormGroup.value.emailCtrl,
                              this.contactFormGroup.value.phoneCtrl,
                              ).subscribe(
                                res =>{
                                  this.openSnackBar(res.name, true)
                                  this.onStatusChange(0)
                                },
                                error =>{
                                  this.openSnackBar(error.error.message, false)
                                }
                              )  
    
        }

}
