import { Injectable } from '@angular/core';
import { Vehiculo } from '../../clases/vehiculo';
import { MiHttpService } from '../http/mi-http.service';
import { promise } from 'protractor';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private miHttp: MiHttpService, private miVehiculo: Vehiculo) { }

  setIdVehiculo(data) {
    this.miVehiculo.id_vehiculo = data;
  }
  setMarca(data) {
    this.miVehiculo.marca = data;
  }
  setModelo(data) {
    this.miVehiculo.modelo = data;
  }
  setAnio(data) {
    this.miVehiculo.anio = data;
  }
  setFumar(data) {
    this.miVehiculo.fumar = data;
  }
  setAire(data) {
    this.miVehiculo.aire = data;
  }
  setBaul(data) {
    this.miVehiculo.baul = data;
  }
  ////////////////////////////////
  getIdVehiculo() {
    return this.miVehiculo.id_vehiculo;
  }
  getIdChofer() {
    return this.miVehiculo.id_chofer;
  }
  getMarca() {
    return this.miVehiculo.marca;
  }
  getModelo() {
    return this.miVehiculo.modelo;
  }
  getAnio() {
    return this.miVehiculo.anio;
  }
  getFumar() {
    return this.miVehiculo.fumar;
  }
  getAire() {
    return this.miVehiculo.aire;
  }
  getBaul() {
    return this.miVehiculo.baul;
  }
  ////////////////
  traerTodosLosVehiculos(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosVehiculos')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarVehiculo(data): Promise<any> {
    return this.miHttp.httpPostP('agregarVehiculo', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerVehiculoPorId(data): Promise<any> {
    return this.miHttp.httpPostP('traerVehiculoPorId', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarVehiculo(data): Promise<any> {
    return this.miHttp.httpPostP('modificarVehiculo', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarVehiculo(data): Promise<any> {
    return this.miHttp.httpPostP('borrarVehiculo', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }

}