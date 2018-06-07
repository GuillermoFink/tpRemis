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

    items: MenuItem[];

    itemsAdm: MenuItem[];

    ngOnInit() {
        this.items = [
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
                    { label: 'Solicitar vehiculo', icon: 'fa-car', routerLink: ['/tablas'] },
                    { label: 'Cancelar vehiculo', icon: 'fa-ban' },
                    { label: 'Calificar viaje', icon: 'fa-star' }
                ],

            },
        ];

        this.itemsAdm = [
            {
                label: ' Usuarios',
                icon: 'fa fa-users-cog',
                items:[
                    {
                        label: ' Alta de usuario', 
                        icon: 'fa-user-plus',
                        items:[
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
                items:[
                    {label: ' Reporte Choferes', icon: 'fa-taxi'},
                    {label: ' Calificacion usuarios', icon: 'fa-address-card'},
                    {label: ' Reporte empleados', icon: 'fa-store'}
                ]
            }
        ];
    }

}
