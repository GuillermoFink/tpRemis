import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/http/mi-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  pw: string;
  constructor(private miHttp: MiHttpService, private miRoot: Router) {
    
   }

  ngOnInit() {
  }

  login(){
    let datos= {nombre: this.user, pw: this.pw}
    this.miHttp.httpPostP('crearToken',datos)
    .then(data =>{
      localStorage.setItem('token', data);
      console.log(data);
      let payload = data.split('.')[1];
      let pay2 = payload.replace('-','+').replace('_','/');
      let datos = JSON.parse(atob(pay2));
      console.log(datos);
      this.miRoot.navigate( ['/solicitarViaje'] );
    })
  }
}
