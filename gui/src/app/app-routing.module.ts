import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/user/administrador/administrador.component';
import { EmpleadoComponent } from './components/user/empleado/empleado.component';
import { SocioComponent } from './components/user/socio/socio.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'socio', component: SocioComponent },
  { path: 'administrador', component: AdministradorComponent },
  // otherwise redirect to home
  //{ path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
