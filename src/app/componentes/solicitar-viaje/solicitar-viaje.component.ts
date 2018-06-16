import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AgmDirection } from 'agm-direction';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { HttpgoogleService } from '../../servicios/httpgmaps/httpgoogle.service';


@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.css']
})

export class SolicitarViajeComponent implements OnInit {
  public flag: number = 0;
  public dir: any;
  public confirmaOrigen: boolean = false;
  public muestroRuta: boolean = false;
  public latitude: number;
  public longitude: number;
  public latitude1: number;
  public longitude1: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          console.log(this.latitude);
          console.log("LATITUD EN CAMBIO");
          this.flag++;
          if(this.flag > 0 && this.confirmaOrigen == true){
            this.muestroRuta = true;
            this.calcularRuta();
            console.log("Ejecuto el calcularRuta");
          }
        });
      });
    });
  }
 
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  guardarOrigen() {
    this.latitude1 = this.latitude;
    this.longitude1 = this.longitude;
    this.confirmaOrigen == true;
    console.log(this.latitude1);
    console.log(this.longitude1);
  }

  calcularRuta() {
    this.dir = {
      origin: { lat: this.latitude1, lng: this.longitude1 },
      destination: { lat: this.longitude, lng: this.longitude }
    }
  }





  /*
    dir: any;
  
    searchControl: FormControl;
    zoom: number;
  
    calleOrigen: string;
    numeroOrigen: number;
    localidadOrigen: string;
    provinciaOrigen: string;
  
    calleDestino: string;
    numeroDestino: number;
    localidadDestino: string;
    provinciaDestino: string;
  
  
  
  
    checkCasa: boolean;
    lat: number = -34.7521695;
    lng: number = -58.4096427;
  
    origen: string = "Avenida+Corrientes+3547+CABA";
    destino: string = "Castelli+994+Lomas+de+Zamora";
    ds: any;
  
  
    constructor(private miServicio: HttpgoogleService) { }
  
    ngOnInit() {
      this.checkCasa = true;
  
    }
  
    calcularDistancias(): Promise<any> {
      return this.miServicio.httpGetP(this.origen, this.destino)
        .then(data => {
          console.log(data);
          return data;
        })
  
  
      //console.log("ejecuto direcciones");
      //this.dir = {
      //  origin: { lat: 24.799448, lng: 120.979021 },
      //  destination: { lat: 24.799524, lng: 120.975017 }
  
      }
  
    }
  
  /*
   traerTodosLosClientes(): Promise<any> {
      return this.miHttp.httpGetP('traerTodosLosClientes')
        .then(data => {
          console.log(data);
          return data;
        })
    } 
  */

}
