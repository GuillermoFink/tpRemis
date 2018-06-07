import { Injectable } from '@angular/core';
import { Cliente } from '../../clases/cliente';
import { MiHttpService } from '../http/mi-http.service';
@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  constructor(private miHttp: MiHttpService, private miCliente: Cliente) { }

  /////////////////////////
  setIdUsuario() {
    this.miCliente.id_usuario;
  }
  setMail(data) {
    this.miCliente.mail = data;
  }
  setPassword(data) {
    this.miCliente.password = data;
  }
  setNombre(data) {
    this.miCliente.nombre = data;
  }
  setApellido(data) {
    this.miCliente.apellido = data;
  }
  setDni(data) {
    this.miCliente.dni = data;
  }
  setTelefono(data) {
    this.miCliente.telefono = data;
  }
  setTipo(data) {
    this.miCliente.tipo = data;
  }
  setIdCliente(data) {
    this.miCliente.id_cliente = data;
  }
  setDomicilio(data) {
    this.miCliente.domicilio = data;
  }
  /////////////////////////
  getIdUsuario() {
    return this.miCliente.mail;
  }
  getMail() {
    return this.miCliente.mail;
  }
  getPassword() {
    return this.miCliente.password;
  }
  getNombre() {
    return this.miCliente.nombre;
  }
  getApellido() {
    return this.miCliente.apellido;
  }
  getDni() {
    return this.miCliente.dni;
  }
  getTelefono() {
    return this.miCliente.telefono;
  }
  getTipo() {
    return this.miCliente.tipo;
  }
  getIdCliente() {
    return this.miCliente.id_cliente;
  }
  getDomicilio() {
    return this.miCliente.domicilio;
  }
  ///////////////////////////////
  traerTodosLosClientes(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosClientes')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarCliente(data): Promise<any> {
    return this.miHttp.httpPostP('agregarCliente', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerClientePorId(data): Promise<any> {
    return this.miHttp.httpPostP('traerClientePorId', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerClientePorDomicilio(data): Promise<any> {
    return this.miHttp.httpPostP('traerClientePorDomicilio', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarCliente(data): Promise<any> {
    return this.miHttp.httpPostP('modificarCliente', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarCliente(data): Promise<any> {
    return this.miHttp.httpPostP('borrarCliente', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
}
