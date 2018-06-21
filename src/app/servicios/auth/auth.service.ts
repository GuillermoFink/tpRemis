import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private miRouter: Router) { }


  canActivate(route, state) {
    let rta = false;
    let miToken = localStorage.getItem('token');
    let payload = miToken.split('.')[1];
    let pay2 = payload.replace('-', '+').replace('_', '/');
    let datos = JSON.parse(atob(pay2));
    console.log("*****DATOS DE PAYLOAD CAN ACTIVATE ******* ");
    console.log(datos);
    console.log(datos.data.nombre);
    if(datos.data.nombre == "asdasda"){
      rta = true;
    }else{
      this.miRouter.navigate(["/login"]);
      rta = false;
    }
    
    return rta;
  }
}
