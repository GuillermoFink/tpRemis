import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpgoogleService {

  constructor(public http: Http) { }
  origen: string = "origins=";
  destino: string = "&destinations=";
  ruta: string = "https://maps.googleapis.com/maps/api/distancematrix/json?";
  key: string = "&key=AIzaSyCvAqOdPIPCsYogT5L_4VcKHDeCrcNjpFM";

  public httpGetP(origen: string, destino: string) {
    this.origen += origen;
    this.destino += destino;
    this.ruta += this.origen + this.destino + this.key;
    return this.http
      .get(this.ruta)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
