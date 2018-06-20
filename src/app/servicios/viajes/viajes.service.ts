import { Injectable } from '@angular/core';
import { Viaje } from '../../clases/viaje';
import { MiHttpService } from '../http/mi-http.service';
import { promise } from 'protractor';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private miHttp: MiHttpService, private miViaje: Viaje) { }

  //////////////////////////////
  setIdEncargado(data) {
    this.miViaje.id_encargado = data;
  }
  setIdCliente(data) {
    this.miViaje.id_cliente = data;
  }
  setIdChofer(data) {
    this.miViaje.id_chofer = data;
  }
  setIdVehiculo(data) {
    this.miViaje.id_vehiculo = data;
  }
  setDireccionInicio(data) {
    this.miViaje.direccion_inicio = data;
  }
  setDireccionDestino(data) {
    this.miViaje.direccion_destino = data;
  }
  setPuntajeChofer(data) {
    this.miViaje.puntaje_chofer = data;
  }
  setPuntajeVehiculo(data) {
    this.miViaje.puntaje_vehiculo = data;
  }
  setPuntajeCliente(data) {
    this.miViaje.puntaje_cliente = data;
  }
  setEstado(data) {
    this.miViaje.estado = data;
  }
  setFormaPago(data) {
    this.miViaje.forma_pago = data;
  }
  ///////////////////////////////
  getIdViaje() {
    return this.miViaje.id_viaje;
  }
  getIdEncargado() {
    return this.miViaje.id_encargado;
  }
  getIdCliente() {
    return this.miViaje.id_cliente;
  }
  getIdChofer() {
    return this.miViaje.id_chofer;
  }
  getIdVehiculo() {
    return this.miViaje.id_vehiculo;
  }
  getDireccionInicio() {
    return this.miViaje.direccion_inicio;
  }
  getDireccionDestino() {
    return this.miViaje.direccion_destino;
  }
  getPuntajeChofer() {
    return this.miViaje.puntaje_chofer;
  }
  getPuntajeVehiculo() {
    return this.miViaje.puntaje_vehiculo;
  }
  getPuntajeCliente() {
    return this.miViaje.puntaje_cliente;
  }
  getEstado() {
    return this.miViaje.estado;
  }
  getFormaPago() {
    return this.miViaje.forma_pago;
  }
////////////////
traerTodosLosviajes(): Promise<any> {
  return this.miHttp.httpGetP('traerTodosLosviajes')
    .then(data => {
      console.log(data);
      return data;
    })
}
agregarViaje(data): Promise<any> {
  return this.miHttp.httpPostP('agregarViaje', data)
    .then(data => {
      console.log(data);
      return data;
    })
}
traerViajePorId(data): Promise<any> {
  return this.miHttp.httpPostP('traerViajePorId', data)
    .then(data => {
      console.log(data);
      return data;
    })
}
modificarViaje(data): Promise<any> {
  return this.miHttp.httpPostP('modificarViaje', data)
    .then(data => {
      console.log(data);
      return data;
    })
}
borrarViaje(data): Promise<any> {
  return this.miHttp.httpPostP('borrarViaje', data)
    .then(data => {
      console.log(data);
      return data;
    })
}
}