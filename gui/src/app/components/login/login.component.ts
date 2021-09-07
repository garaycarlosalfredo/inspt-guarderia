import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  token = {};

  constructor(private authService : AuthService) {}

  ngOnInit(): void {
  }

  login(form: NgForm){
    event?.preventDefault() 
    this.authService.login(form.value.userName,form.value.password)

  }

}
