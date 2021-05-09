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

  private readonly windDirection: any = {
    'NNE': {
      from: 11.26,
      to: 33.75
    },
    'NE': {
      from: 33.76,
      to: 56.25
    },
    'ENE': {
      from: 56.26,
      to: 78.75
    },
    'E': {
      from: 78.76,
      to: 101.25
    },
    'ESE': {
      from: 101.26,
      to: 123.75
    },
    'SE': {
      from: 123.76,
      to: 146.25
    },
    'SSE': {
      from: 146.26,
      to: 168.75
    },
    'S': {
      from: 168.76,
      to: 191.25
    },
    'SSO': {
      from: 191.26,
      to: 213.75
    },
    'SO': {
      from: 213.76,
      to: 236.25
    },
    'OSO': {
      from: 236.26,
      to: 258.75
    },
    'O': {
      from: 258.76,
      to: 281.25
    },
    'ONO': {
      from: 281.26,
      to: 303.75
    },
    'NO': {
      from: 303.76,
      to: 326.25
    },
    'NNO': {
      from: 326.26,
      to: 348.75
    }
  }

  constructor(private http: HttpClient) {
    this._url = environment.url;
    // this._key = environment.key;
  }

  getClima(ciudad: string): Observable<any> {
    //const URL = this._url + this._key + '&q=' + ciudad + '&units=metric';
    const URL = this._url + "?city=" + ciudad;
    return this.http.get(URL);
  }

  getWindDirection(degree: number): any {
    let direction = 'N';
    for(let prop in this.windDirection){
      let from = this.windDirection[prop].from;
      let to = this.windDirection[prop].to;
      if (degree >= from && degree <= to) {
        direction = prop;
        break;
      }
    }
    return direction;
  }
}
