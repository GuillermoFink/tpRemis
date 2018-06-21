import { Injectable } from '@angular/core';
import { Chofer } from '../../clases/chofer';
import { MiHttpService } from '../http/mi-http.service';
import { promise } from 'protractor';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {

  constructor(private miHttp: MiHttpService, private miChofer: Chofer) { }

  /////////////////////////
  setIdUsuario() {
    this.miChofer.id_usuario;
  }
  setMail(data) {
    this.miChofer.mail = data;
  }
  setPassword(data) {
    this.miChofer.password = data;
  }
  setNombre(data) {
    this.miChofer.nombre = data;
  }
  setApellido(data) {
    this.miChofer.apellido = data;
  }
  setDni(data) {
    this.miChofer.dni = data;
  }
  setTelefono(data) {
    this.miChofer.telefono = data;
  }
  setTipo(data) {
    this.miChofer.tipo = data;
  }
  setIdChofer(data) {
    this.miChofer.id_chofer = data;
  }
  setlegajo(data) {
    this.miChofer.legajo = data;
  }
  /////////////////////////
  getIdUsuario() {
    return this.miChofer.mail;
  }
  getMail() {
    return this.miChofer.mail;
  }
  getPassword() {
    return this.miChofer.password;
  }
  getNombre() {
    return this.miChofer.nombre;
  }
  getApellido() {
    return this.miChofer.apellido;
  }
  getDni() {
    return this.miChofer.dni;
  }
  getTelefono() {
    return this.miChofer.telefono;
  }
  getTipo() {
    return this.miChofer.tipo;
  }
  getIdChofer() {
    return this.miChofer.id_chofer;
  }
  getlegajo() {
    return this.miChofer.legajo;
  }
  ///////////////////////////////
  traerTodosLosChoferes(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosChoferes')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarChofer(data): Promise<any> {
    return this.miHttp.httpPostP('agregarChofer', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerChoferPorId(data): Promise<any> {
    return this.miHttp.httpPostP('traerChoferPorId', { 'id': data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerChoferPorlegajo(data): Promise<any> {
    return this.miHttp.httpPostP('traerChoferPorLegajo', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarChofer(data): Promise<any> {
    return this.miHttp.httpPostP('modificarChofer', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarChofer(data): Promise<any> {
    return this.miHttp.httpPostP('borrarChofer', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }

}