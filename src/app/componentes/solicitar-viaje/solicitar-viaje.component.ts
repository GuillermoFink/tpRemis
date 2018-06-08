import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.css']
})
export class SolicitarViajeComponent implements OnInit {
  checkCasa: boolean;
  lat: number = -34.7521695;
  lng: number = -58.4096427;

  constructor() { }

  ngOnInit() {
    this.checkCasa = true;
  }

}
