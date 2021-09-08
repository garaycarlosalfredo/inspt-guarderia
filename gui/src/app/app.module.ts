import { AuthService } from 'src/app/service/auth/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/user/empleado/list-empleado/list-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { LoginComponent } from './components/login/login.component';
import { EmpleadoComponent } from './components/user/empleado/empleado.component';
import { FormComponent } from './components/login/form/form.component';
import { AddUserComponent } from './components/user/administrador/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmpleadoComponent,
    ListEmpleadoComponent,
    NavbarComponent,
    MensajeConfirmacionComponent,
    LoginComponent,
    EmpleadoComponent,
    FormComponent,
    AddUserComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
