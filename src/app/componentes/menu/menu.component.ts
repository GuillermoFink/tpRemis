import { Component, OnInit } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor() { }

    itemsCliente: MenuItem[];
    itemsEmpleado: MenuItem[];
    itemsAdm: MenuItem[];

    ngOnInit() {
        //MENU CLIENTE
        this.itemsCliente = [
            {
                label: 'Home',
                icon: 'fa fa-home',
                routerLink: ['/home']
            },
            {
                label: 'Mi Usuario',
                icon: 'fa-user',
                items: [
                    { label: 'Imagen', icon: 'fa-image' },
                    { label: 'Preferencias', icon: 'fa-cogs' },
                    { label: 'Mis viajes', icon: 'fa-map-signs' },
                    { label: 'Mis calificaciones', icon: 'fa-star' },
                    { label: 'Calificaciones enviadas', icon: 'fa-star' }
                ]

            },
            {
                label: 'Servicio',
                icon: 'fa-car',
                items: [
                    { label: 'Solicitar vehiculo', icon: 'fa-car', routerLink: ['/solicitarViaje'] },
                    { label: 'Cancelar vehiculo', icon: 'fa-ban' },
                    { label: 'Calificar viaje', icon: 'fa-star' }
                ],

            },
        ];
        //MENU DE ADMINISTRADOR
        this.itemsAdm = [
            {
                label: ' Usuarios',
                icon: 'fa fa-users-cog',
                items: [
                    {
                        label: ' Alta de usuario',
                        icon: 'fa-user-plus',
                        items: [
                            {
                                label: ' Alta de Admin',
                                icon: 'fa-user-ninja',
                            },
                            {
                                label: ' Alta de chofer',
                                icon: 'fa-user-secret',
                            },
                            {
                                label: ' Alta de cliente',
                                icon: 'fa-user-tag'
                            }
                        ]
                    },
                    {
                        label: ' Modificar usuarios',
                        icon: 'fa-user-cog'
                    },
                    {
                        label: ' Eliminar usuarios',
                        icon: 'fa-user-slash'
                    },
                ]
            },
            {
                label: ' Reportes',
                icon: 'fa-newspaper',
                items: [
                    { label: ' Reporte Choferes', icon: 'fa-taxi' },
                    { label: ' Calificacion usuarios', icon: 'fa-address-card' },
                    { label: ' Reporte empleados', icon: 'fa-store' },
                ]
            }
        ];
        //MENU DE EMPLEADO
        this.itemsEmpleado = [
            {
                label: ' Choferes', icon: 'fa-address-card', items: [
                    { label: ' Alta de chofer', icon: 'fa-user-check' },
                    { label: ' Baja de chofer', icon: 'fa-user-slash' },
                    { label: ' Asignar Vehiculo', icon: 'fa-user-md' }
                ]
            },
            {
                label: ' Viajes', icon: 'fa-map-signs', items: [
                    { label: 'Asignar viaje', icon: 'fa-plus' },
                    { label: ' Cancelar Viaje', icon: 'fa-ban' },
                    { label: ' Viajes Activos', icon: 'fa-taxi' },
                    { label: ' Viajes Pendientes', icon: 'fa-calendar-check' },
                    { label: ' Reservas', icon: 'fa-calendar-alt' }
                ]
            },
            {
                label: ' Clientes', icon: 'fa-user-tie', items: [
                    { label: ' Alta de cliente', icon: 'fa-user-check' },
                    { label: ' Baja de cliente', icon: 'fa-user-minus' },
                ]
            },
            {
                label: ' Vehiculos', icon: 'fa-car', items: [
                    { label: ' Alta Vehiculo', icon: 'fa-plus' },
                    { label: ' Baja Vehiculo', icon: 'fa-ban' },
                    { label: ' Modificacion Vehiculo', icon: 'fa-exchange-alt' },
                    { label: ' Aisgnar Chofer', icon: 'fa-user-md' }
                ]
            }
        ];
        
    }

}
