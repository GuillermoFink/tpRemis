import { Component, OnInit } from '@angular/core';
import {MenuItem}from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  queMuestro: number;
  
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'fa-home',
            routerLink: ['/home']
            
        },
        {
            label: 'Mi Usuario',
            icon: 'fa-user',
            items: [
                {label: 'Imagen', icon: 'fa-image'},
                {label: 'Preferencias', icon: 'fa-cogs'},
                {label: 'Mis viajes', icon: 'fa-map-signs'},
                {label: 'Mis calificaciones', icon: 'fa-star'},
                {label: 'Calificaciones enviadas', icon: 'fa-star'}
            ]
        },
        {
          label: 'Servicio',
          icon: 'fa-car',
          items:[
            {label: 'Solicitar vehiculo',icon: 'fa-car', command: (click)=>{this.DivParaMostrar(0)}},
            {label: 'Cancelar vehiculo', icon: 'fa-ban'},
            {label: 'Calificar viaje', icon: 'fa-star'}
          ],
          
        },
        {
            label: 'Help',
            icon: 'fa-question',
            items: [
                {
                    label: 'Contents'
                },
                {
                    label: 'Search', 
                    icon: 'fa-search', 
                    items: [
                        {
                            label: 'Text', 
                            items: [
                                {
                                    label: 'Workspace'
                                }
                            ]
                        },
                        {
                            label: 'File'
                        }
                ]}
            ]
        },
        {
            label: 'Actions',
            icon: 'fa-gear',
            items: [
                {
                    label: 'Edit',
                    icon: 'fa-refresh',
                    items: [
                        {label: 'Save', icon: 'fa-save'},
                        {label: 'Update', icon: 'fa-save'},
                    ]
                },
                {
                    label: 'Other',
                    icon: 'fa-phone',
                    items: [
                        {label: 'Delete', icon: 'fa-minus'}
                    ]
                }
            ]
        }
    ];
}

  DivParaMostrar(quemuestro){
    this.queMuestro = quemuestro;
  }
}
