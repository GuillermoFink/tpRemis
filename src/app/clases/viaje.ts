export class Viaje {

    id_viaje: number;
    id_encargado: number;
    id_cliente: number;
    id_chofer: number;
    id_vehiculo: number;
    direccion_inicio: string;
    direccion_destino: string;
    puntaje_chofer: number;
    puntaje_vehiculo: number;
    puntaje_cliente: number;
    estado: number;
    forma_pago: number;

    constructor() { }
}