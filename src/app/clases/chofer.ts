import { Usuario } from './usuario';

export class Chofer extends Usuario {
    id_chofer: number;
    id_usuario: number;
    legajo: number;

    constructor() { super() }
}
