import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PrimengModule } from './modulos/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
import { MiHttpService } from './servicios/http/mi-http.service';
import { HttpgoogleService } from './servicios/httpgmaps/httpgoogle.service';
import { HttpModule } from '@angular/http';
import { Cliente } from './clases/cliente';
import { ServicioClienteService } from './servicios/cliente/servicio-cliente.service';
import { Vehiculo } from './clases/vehiculo';
import { VehiculosService } from './servicios/vehiculos/vehiculos.service';
import { Chofer } from './clases/chofer';
import { ChoferService } from './servicios/chofer/chofer.service';
import { Viaje } from './clases/viaje';
import { ViajesService } from './servicios/viajes/viajes.service';
import { Usu } from './clases/usu';
import { UsuarioService } from './servicios/usuario/usuario.service';

// IMPORT DE ANGULAR GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';


import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { SolicitarViajeComponent } from './componentes/solicitar-viaje/solicitar-viaje.component';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { SinoPipe } from './pipes/sinoPipe/sino.pipe';
import { AuthService } from './servicios/auth/auth.service';
import { MisViajesComponent } from './componentes/mis-viajes/mis-viajes.component';

const config: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
    //canActivate: [AuthService]
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "registro",
    component: RegistroClienteComponent
  },
  {
    path: "estadisticas",
    component: EstadisticasComponent
  },
  {
    path: "tablas",
    component: TablasComponent
  },
  {
    path: "solicitarViaje",
    component: SolicitarViajeComponent,
    canActivate: [AuthService]
  },
  {
    path: "misViajes",
    component: MisViajesComponent
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
    TablasComponent,
    SolicitarViajeComponent,
    RegistroClienteComponent,
    SinoPipe,
    MisViajesComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,
    HttpModule,
    RouterModule.forRoot(config),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvAqOdPIPCsYogT5L_4VcKHDeCrcNjpFM',
      libraries: ["places"]
    }),
    AgmDirectionModule
  ],
  providers: [
    Cliente,
    Vehiculo,
    Chofer,
    Viaje,
    Usu,
    ServicioClienteService,
    MiHttpService,
    AgmDirectionModule,
    HttpgoogleService,
    VehiculosService,
    ChoferService,
    ViajesService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
