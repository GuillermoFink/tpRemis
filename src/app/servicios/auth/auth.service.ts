import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService} from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private miRouter: Router, private miServicioUsuario: UsuarioService) {
    try {
      let data = localStorage.getItem('token');
      let payload = data.split('.')[1];
      let pay2 = payload.replace('-', '+').replace('_', '/');
      let datos = JSON.parse(atob(pay2));
      console.log("datos del token");
      this.miServicioUsuario.setApellido(datos['data'][0]['apellido']);
      this.miServicioUsuario.setId(datos['data'][0]['id_usuario']);
      this.miServicioUsuario.setMail(datos['data'][0]['mail']);
      this.miServicioUsuario.setNombre(datos['data'][0]['nombre']);
      this.miServicioUsuario.setTipo(datos['data'][0]['tipo']);
      this.miServicioUsuario.setDni(datos['data'][0]['dni']);
      this.miServicioUsuario.setTelefono(datos['data'][0]['telefono']);
    } catch (e) {
      console.log(e);
    }
   }


  canActivate(route, state) {
    let rta = false;
    let miToken = localStorage.getItem('token');
    let payload = miToken.split('.')[1];
    let pay2 = payload.replace('-', '+').replace('_', '/');
    let datos = JSON.parse(atob(pay2));
    console.log("*****DATOS DE PAYLOAD CAN ACTIVATE ******* ");
    console.log(datos);
    console.log(datos['data'][0]['nombre']);
    if(datos['data'][0]['nombre'] != ""){
      this.miServicioUsuario.setApellido(datos['data'][0]['apellido']);
      this.miServicioUsuario.setId(datos['data'][0]['id_usuario']);
      this.miServicioUsuario.setMail(datos['data'][0]['mail']);
      this.miServicioUsuario.setNombre(datos['data'][0]['nombre']);
      this.miServicioUsuario.setTipo(datos['data'][0]['tipo']);
      this.miServicioUsuario.setDni(datos['data'][0]['dni']);
      this.miServicioUsuario.setTelefono(datos['data'][0]['telefono']);
      rta = true;
    }else{
      this.miRouter.navigate(["/login"]);
      rta = false;
    }
    
    return rta;
  }
}
