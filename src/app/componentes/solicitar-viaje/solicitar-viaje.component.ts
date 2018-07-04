import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';

import { AgmDirection } from 'agm-direction';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { HttpgoogleService } from '../../servicios/httpgmaps/httpgoogle.service';
import { ViajesService } from '../../servicios/viajes/viajes.service';
import { UsuarioService } from '../../servicios/usuario/usuario.service';


@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.css']
})

export class SolicitarViajeComponent implements OnInit {
  public seleccionoOirgen: boolean = true;
  public seleccionoDestino: boolean = false;

  public duracion: string = "";
  public cantKm: any;
  public distancia: string;
  public tipoDistancia: string;
  public costo;
  public datosViaje: boolean = false;

  public nombre: string;


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
    private miServicio: HttpgoogleService,
    private miServicioViaje: ViajesService,
    private miServicioUsuario: UsuarioService
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
    this.seleccionoOirgen = !this.seleccionoOirgen;
    this.seleccionoDestino = !this.seleccionoDestino;
    (<HTMLInputElement>document.getElementById('float-input')).value = " ";
    (<HTMLInputElement>document.getElementById('tituloOrigen')).textContent = "Seleccione Destino";
  }
  guardarDestino() {
    let servicio = new google.maps.DistanceMatrixService();
    this.DestLat = this.latitude;
    this.DestLng = this.longitude;
    this.calcularRuta();
    this.muestroRuta = true;
    let mode = google.maps.TravelMode['DRIVING'];
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
    }, (responseDis, status) => {
      if (status !== google.maps.DistanceMatrixStatus.OK) {
        console.log("error", status);
      } else {
        console.log(responseDis);
        //alert(responseDis.rows[0].elements[0].distance.text + responseDis.rows[0].elements[0].duration.text);
        let distancia = responseDis.rows[0].elements[0].distance.text;
        let duracion = responseDis.rows[0].elements[0].duration.text;
        this.MostrarInfoViaje(distancia, duracion);
        this.miServicioViaje.setCosto(this.costo);
        this.miServicioViaje.setEstado(0);
        this.miServicioViaje.setDistancia(this.distancia);
        this.miServicioViaje.setFormaPago(1);
        this.miServicioViaje.setLatitudInicio(new google.maps.LatLng(this.OriLat,this.OriLng));
        this.miServicioViaje.setLatitudInicio(new google.maps.LatLng(this.DestLat,this.DestLng));
        //console.log(responseDis);
        //console.log("**");
        //console.log("VALOR DEL RESPONSE.TEXT: "+responseDis.rows[0].elements[0].distance.text);


      }
    });
  }
  response_data(responseDis, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK || status != "OK") {
      console.log("error", status);
    } else {
      alert(responseDis.rows[0].elements[0].distance.text + responseDis.rows[0].elements[0].duration.text);
      console.log(responseDis);
      console.log("**");
      console.log("VALOR DEL RESPONSE.TEXT: " + responseDis.rows[0].elements[0].distance.text);

    }
  }
  calcularRuta() {
    this.dir = {
      origin: { lat: this.OriLat, lng: this.OriLng },
      destination: { lat: this.DestLat, lng: this.DestLng }
    }
  }
  calcularDistancias(): Promise<any> {
    let origen: string = this.OriLat.toString() + "," + this.OriLng.toString();
    let destino: string = this.DestLat.toString() + "," + this.DestLng.toString();
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
  calcularCosto(dist, tipo) {
    let minimo = 70;
    if (tipo == 'km') {

      let costo;
      if (dist < 2) {
        costo = minimo;
      } else {
        costo = (dist - 2) * 30;
        costo+=70;
      }
      return costo;
    } else {
      return minimo;
    }

  }
  MostrarInfoViaje(distancia, duracion) {
    this.distancia = distancia;
    this.cantKm = distancia.split(' ');
    this.tipoDistancia = this.cantKm[1];
    this.cantKm = this.cantKm[0];

    this.cantKm = distancia;
    this.duracion = duracion;
    this.costo = this.calcularCosto(parseInt(this.cantKm), this.tipoDistancia);
    this.datosViaje = true;
  }

}