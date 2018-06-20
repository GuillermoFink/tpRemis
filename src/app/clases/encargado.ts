import { Usuario } from './usuario';


export class Encargado extends Usuario {

    id_encargado: number;
    id_usuario: number;
    legajo: number;

    constructor() { super() }
}