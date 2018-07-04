import { Injectable } from '@angular/core';
import { Usu } from '../../clases/usu';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miUsu: Usu) { }

  setId(data){
    this.miUsu.id_usuario = data;
  }
  setNombre(data){
    this.miUsu.nombre = data;
  }
  setApellido(data){
    this.miUsu.apellido = data;
  }
  setTipo(data){
    this.miUsu.tipo = data;
  }
  setPassword(data){
    this.miUsu.password = data;
  }
  setMail(data){
    this.miUsu.mail = data;
  }
  setTelefono(data){
    this.miUsu.telefono = data;
  }
  setDni(data){
    this.miUsu.dni = data;
  }
  getId(){
    return this.miUsu.id_usuario;
  }
  getNombre(){
    return this.miUsu.nombre;
  }
  getApellido(){
    return this.miUsu.apellido;
  }
  getTipo(){
    return this.miUsu.tipo;
  }
  getPassword(){
    return this.miUsu.password;
  }
  getMail(){
    return this.miUsu.mail;
  }
  getTelefono(){
    return this.miUsu.telefono;
  }
  getDni(){
    return this.miUsu.dni;
  }
}


