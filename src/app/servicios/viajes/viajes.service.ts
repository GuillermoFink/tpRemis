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
  setIdVehiculo(data) {
    this.miViaje.id_vehiculo = data;
  }
  setLatitudInicio(data) {
    this.miViaje.latitud_inicio = data;
  }
  setLongitudInicio(data) {
    this.miViaje.longitud_inicio = data;
  }
  setLatitudDestino(data) {
    this.miViaje.latitud_destino = data;
  }
  setLongitudDestino(data) {
    this.miViaje.longitud_destino = data;
  }
  setDistancia(data) {
    this.miViaje.distancia = data;
  }
  setCosto(data) {
    this.miViaje.costo = data;
  }
  setFormaPago(data) {
    this.miViaje.forma_pago = data;
  }
  setFecha(data) {
    this.miViaje.fecha = data;
  }
  setEstado(data) {
    this.miViaje.estado = data;
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
  getIdVehiculo() {
    return this.miViaje.id_vehiculo;
  }
  getLatitudInicio() {
    return this.miViaje.latitud_inicio;
  }
  getLongitudInicio() {
    return this.miViaje.longitud_inicio;
  }
  getLatitudDestino() {
    return this.miViaje.latitud_destino;
  }
  getLongitudDestino() {
    return this.miViaje.longitud_destino;
  }
  getDistancia() {
    return this.miViaje.distancia;
  }
  getCosto() {
    return this.miViaje.costo;
  }
  getFormaPago() {
    return this.miViaje.forma_pago;
  }
  getFecha() {
    return this.miViaje.fecha;
  }
  getEstado() {
    return this.miViaje.estado;
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