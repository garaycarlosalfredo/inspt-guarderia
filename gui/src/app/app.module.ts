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
import { HomeComponent } from './layout/home/home.component';
import { AdministradorComponent } from './components/user/administrador/administrador.component';
import { SocioComponent } from './components/user/socio/socio.component';
import { UserToolBarComponent } from './components/toolbar/user-tool-bar/user-tool-bar.component';
import { EmployeeToolBarComponent } from './components/toolbar/employee-tool-bar/employee-tool-bar.component';
import { AdminToolBarComponent } from './components/toolbar/admin-tool-bar/admin-tool-bar.component';
import { PartnerToolBarComponent } from './components/toolbar/partner-tool-bar/partner-tool-bar.component';
import { AddUserFormComponent } from './components/user/administrador/add-user-form/add-user-form.component';
import {MatSelectModule} from '@angular/material/select';

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
    HomeComponent,
    AdministradorComponent,
    SocioComponent,
    UserToolBarComponent,
    EmployeeToolBarComponent,
    AdminToolBarComponent,
    PartnerToolBarComponent,
    AddUserFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatSelectModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
