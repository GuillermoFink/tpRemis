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
  public OriLat: number;
  public OriLng: number;
  public DestLat: number;
  public DestLng: number;

  public flag: number = 0;
  public dir: any;
  public confirmaOrigen: boolean = false;
  public muestroRuta: boolean = false;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  public OriplaceGmaps: google.maps.places.PlaceResult;
  public AuxPlaceGmaps: google.maps.places.PlaceResult;
  public DestplaceGmaps: google.maps.places.PlaceResult;

  @ViewChild("search")
  public searchElementRef: ElementRef

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private miServicio: HttpgoogleService
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
          this.AuxPlaceGmaps = place;

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          /*
          console.log(this.latitude);
          console.log("LATITUD EN CAMBIO");
          console.log(this.flag);
          this.flag+=1;
          if(this.flag > 1 && this.confirmaOrigen == true){
            this.calcularRuta();
            this.muestroRuta = true;
            this.zoom = 14;
            console.log("Ejecuto el calcularRuta");
            console.log("****************");
            console.log(this.latitude);
            console.log(this.latitude1);
            console.log("********LONGITUDES*********");
            console.log(this.longitude);
            console.log(this.longitude1);
          }
          */
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
    this.OriLat = this.latitude;
    this.OriLng = this.longitude;
  }
  guardarDestino(){
    let servicio = new google.maps.DistanceMatrixService();
   
    this.DestLat = this.latitude;
    this.DestLng = this.longitude;
    this.calcularRuta();
    this.muestroRuta = true;
    let mode =  google.maps.TravelMode['DRIVING'];
    let origen = new google.maps.LatLng(this.OriLat, this.OriLng);
    let destino = new google.maps.LatLng(this.DestLat, this.DestLng);
    servicio.getDistanceMatrix({
      origins: [origen],
      destinations: [destino],
      travelMode: mode,
      unitSystem: google.maps.UnitSystem.METRIC,
      durationInTraffic: true,
      avoidHighways: false,
      avoidTolls: false
    }, this.response_data);
  }
  response_data(responseDis, status){
    if (status !== google.maps.DistanceMatrixStatus.OK || status != "OK"){
      console.log("error", status);
    }else{
      alert(responseDis.rows[0].elements[0].distance.text+responseDis.rows[0].elements[0].duration.text);
      console.log(responseDis);
    }
  }
  calcularRuta() {
    this.dir = {
      origin: { lat: this.OriLat, lng: this.OriLng },
      destination: { lat: this.DestLat, lng: this.DestLng }
    }
  }
  calcularDistancias(): Promise<any> {
    let origen: string = this.OriLat.toString()+","+this.OriLng.toString();
    let destino: string = this.DestLat.toString()+","+this.DestLng.toString();
    return this.miServicio.httpGetP(origen, destino)
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


