import { Component, OnInit, SimpleChanges } from '@angular/core';
import {ServicioClienteService} from '../../servicios/cliente/servicio-cliente.service';
import {Cliente} from '../../clases/cliente';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  cuerpoTabla: any;
  cols: any[];
  tituloTabla: string;
  
  constructor(private misClientes: ServicioClienteService, private unObjeto: Cliente) {
    console.log(misClientes.traerTodosLosClientes());
   }

  ngOnInit() {
    this.misClientes.traerTodosLosClientes().then(data => {
      this.cuerpoTabla = data;
      console.log(this.cuerpoTabla);
    });
    this.tituloTabla = "TABLA DE CLIENTES";
    this.cols = [
      { field: 'nombre' , header: 'Nombre'},
      { field: 'apellido' , header: 'Apellido'},
      { field: 'domicilio' , header: 'Domicilio'},
    ] 
  }

  ngOnChange(changes: SimpleChanges){
    this.misClientes.traerTodosLosClientes().then(data => {
      this.cuerpoTabla = data;
      console.log(this.cuerpoTabla);
    });
    this.tituloTabla = "SARASA";
    this.cols = [
      { field: 'nombre' , header: 'Nombre'},
      { field: 'apellido' , header: 'Apellido'},
      { field: 'domicilio' , header: 'Domicilio'},
    ] 
  }

}
