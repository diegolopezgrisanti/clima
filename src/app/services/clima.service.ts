import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  _url;
  //_key;

  constructor(private http: HttpClient) {
    this._url = environment.url;
    // this._key = environment.key;
  }

  getClima(ciudad: string): Observable<any> {
    //const URL = this._url + this._key + '&q=' + ciudad + '&units=metric';
    const URL = this._url + "?city=" + ciudad;
    return this.http.get(URL);
  }

}
