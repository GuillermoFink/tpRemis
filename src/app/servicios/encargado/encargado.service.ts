import { Injectable } from '@angular/core';
import { Encargado } from '../../clases/encargado';
import { MiHttpService } from '../http/mi-http.service';
import { promise } from 'protractor';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {

  constructor(private miHttp: MiHttpService, private miEncargado: Encargado) { }
  /////////////////////////
  setIdUsuario() {
    this.miEncargado.id_usuario;
  }
  setMail(data) {
    this.miEncargado.mail = data;
  }
  setPassword(data) {
    this.miEncargado.password = data;
  }
  setNombre(data) {
    this.miEncargado.nombre = data;
  }
  setApellido(data) {
    this.miEncargado.apellido = data;
  }
  setDni(data) {
    this.miEncargado.dni = data;
  }
  setTelefono(data) {
    this.miEncargado.telefono = data;
  }
  setTipo(data) {
    this.miEncargado.tipo = data;
  }
  setIdEncargado(data) {
    this.miEncargado.id_encargado = data;
  }
  setlegajo(data) {
    this.miEncargado.legajo = data;
  }
  /////////////////////////
  getIdUsuario() {
    return this.miEncargado.mail;
  }
  getMail() {
    return this.miEncargado.mail;
  }
  getPassword() {
    return this.miEncargado.password;
  }
  getNombre() {
    return this.miEncargado.nombre;
  }
  getApellido() {
    return this.miEncargado.apellido;
  }
  getDni() {
    return this.miEncargado.dni;
  }
  getTelefono() {
    return this.miEncargado.telefono;
  }
  getTipo() {
    return this.miEncargado.tipo;
  }
  getIdEncargado() {
    return this.miEncargado.id_encargado;
  }
  getlegajo() {
    return this.miEncargado.legajo;
  }
  ///////////////////////////////
  traerTodosLosEncargados(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosEncargados')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarEncargado(data): Promise<any> {
    return this.miHttp.httpPostP('agregarEncargado', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerEncargadoPorId(data): Promise<any> {
    return this.miHttp.httpPostP('traerEncargadoPorId', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerEncargadoPorlegajo(data): Promise<any> {
    return this.miHttp.httpPostP('traerEncargadoPorLegajo', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarEncargado(data): Promise<any> {
    return this.miHttp.httpPostP('modificarEncargado', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarEncargado(data): Promise<any> {
    return this.miHttp.httpPostP('borrarEncargado', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }

}