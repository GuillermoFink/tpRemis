import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ServicioClienteService } from '../../servicios/cliente/servicio-cliente.service';
import { Cliente } from '../../clases/cliente';
import { Message, SelectItem } from 'primeng/components/common/api';

import { Vehiculo } from '../../clases/vehiculo';
import { VehiculosService } from '../../servicios/vehiculos/vehiculos.service';

import { Chofer } from '../../clases/chofer';
import { ChoferService } from '../../servicios/chofer/chofer.service';
import { ViajesService } from '../../servicios/viajes/viajes.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  cuerpoTabla: any;
  cols: any[];
  tituloTabla: string;
  opciones: SelectItem[];
  vehiculoSeleccionado: Vehiculo;
  unChofer: Chofer;

  constructor(
    private misClientes: ServicioClienteService, 
    private unObjeto: Cliente, 
    private unAuto: Vehiculo, 
    private misVehiculos: VehiculosService, 
    private misChoferes: ChoferService,
    private miServicioViaje: ViajesService
  ) {
    console.log(misClientes.traerTodosLosClientes());
  }

  ngOnInit() {
    this.opciones = [
      { label: 'Todos', value: null },
      { label: 'Si', value: 1 },
      { label: 'No', value: 0 }
    ];


    this.misVehiculos.traerTodosLosVehiculos().then(data => {
      this.cuerpoTabla = data;
    });
    this.tituloTabla = "TABLA DE VEHICULOS";
    this.cols = [
      { field: 'marca', header: 'Marca' },
      { field: 'modelo', header: 'Modelo' },
      { field: 'anio', header: 'Año' },
      { field: 'fumar', header: 'Fumar' },
      { field: 'aire', header: 'Aire' },
      { field: 'baul', header: 'Baul' }
    ]

    /*this.misClientes.traerTodosLosClientes().then(data => {
      this.cuerpoTabla = data;
      //console.log(this.cuerpoTabla);
    });
    this.tituloTabla = "TABLA DE CLIENTES";
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'domicilio', header: 'Domicilio' },
    ]
    */
  }

  onRowSelect(event) {
    this.miServicioViaje.setIdVehiculo(this.vehiculoSeleccionado.id_vehiculo);
    this.miServicioViaje.setIdChofer(this.vehiculoSeleccionado.id_chofer);
    this.misChoferes.traerChoferPorId(this.vehiculoSeleccionado.id_chofer).then(data => {
      this.unChofer = data[0];
    });
  }

  ngOnChange(changes: SimpleChanges) {

    /*
    this.misClientes.traerTodosLosClientes().then(data => {
      this.cuerpoTabla = data;
      //console.log(this.cuerpoTabla);
    });
    this.tituloTabla = "SARASA";
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'domicilio', header: 'Domicilio' },
    ]
    */
  }

}
