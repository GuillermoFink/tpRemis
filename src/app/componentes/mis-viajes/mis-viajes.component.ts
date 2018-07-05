import { Component, OnInit } from '@angular/core';
import { ServicioClienteService } from '../../servicios/cliente/servicio-cliente.service';
import { Cliente } from '../../clases/cliente';
import { Message, SelectItem } from 'primeng/components/common/api';

import { Vehiculo } from '../../clases/vehiculo';
import { VehiculosService } from '../../servicios/vehiculos/vehiculos.service';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { Chofer } from '../../clases/chofer';
import { ChoferService } from '../../servicios/chofer/chofer.service';
import { ViajesService } from '../../servicios/viajes/viajes.service';
import { Viaje } from '../../clases/viaje';
import { Usu } from '../../clases/usu';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.component.html',
  styleUrls: ['./mis-viajes.component.css']
})
export class MisViajesComponent implements OnInit {
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
    private miServicioViaje: ViajesService,
    private miViaje: Viaje,
    private miServicioUsuario: UsuarioService,
    private miUsu: Usu
  ) { }

  ngOnInit() {
    console.log(this.miUsu);
    this.opciones = [
      { label: 'Estado', value: null },
      { label: 'En curso', value: 1 },
      { label: 'Finalizados', value: 0 }
    ];


    this.miServicioViaje.traerViajesPorCliente(this.miServicioUsuario.getId()).then(data => {
      this.cuerpoTabla = data;
    });
    this.tituloTabla = "Mis viajes";
    this.cols = [
      { field: 'inicio', header: 'Origen' },
      { field: 'destino', header: 'Destino' },
      { field: 'distancia', header: 'Distancia' },
      { field: 'fecha', header: 'Fecha' },
      { field: 'costo', header: 'Costo' },
      { field: 'estado', header: 'Estado' }
    ]
  }

}
