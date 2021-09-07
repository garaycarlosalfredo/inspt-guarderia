import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hide = true;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  login(form: NgForm){
    event?.preventDefault() 
    this.authService.login(form.value.userName,form.value.password)

  }
}
