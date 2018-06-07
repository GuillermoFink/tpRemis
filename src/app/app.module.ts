import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PrimengModule } from './modulos/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
import { MiHttpService } from './servicios/http/mi-http.service';
import { HttpModule } from '@angular/http';
import { Cliente } from './clases/cliente';
import { ServicioClienteService } from './servicios/cliente/servicio-cliente.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TablasComponent } from './componentes/tablas/tablas.component';

const config: Routes=[
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "estadisticas",
    component: EstadisticasComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    EstadisticasComponent,
    MenuComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimengModule,
    HttpModule,
    RouterModule.forRoot(config),
    ReactiveFormsModule
  ],
  providers: [Cliente,ServicioClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
