import { Usuario } from "./usuario";

export class Cliente extends Usuario {
    id_cliente: number;
    domicilio: string;

    constructor() { super() }
}
