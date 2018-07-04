export class Viaje {

    id_viaje: number;
    id_encargado: number;
    id_cliente: number;
    id_vehiculo: number;
    id_chofer: number;

    latitud_inicio: number;
    longitud_inicio: number;

    latitud_destino: number;
    longitud_destino: number;

    distancia: number;
    costo: number;
    forma_pago: number;
    fecha: number;
    estado: number;

    inicio: string;
    destino: string;

    constructor() { }
}