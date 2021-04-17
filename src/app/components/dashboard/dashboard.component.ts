import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //urlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  ciudad = 'BUENOS AIRES';
  temperatura = 0;
  humedad = 0;
  clima = '';
  viento = 0;
  direccionViento = '';
  visibilidad = 0;
  presion = 0;
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
    this.obtenerClima();
  }

  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {

      console.log(data);

      this.loading = false;
      this.query = true;
      this.temperatura = Math.round(data.main.temp);
      this.humedad = data.main.humidity;
      this.visibilidad = data.visibility;
      this.presion = data.main.pressure;

      switch (data.weather[0].description) {
        case 'thunderstorm with light rain':
          this.clima = 'Tormenta con lluvia ligera';
          break;
        case 'thunderstorm with rain':
          this.clima = 'Tormenta con lluvia';
          break;
        case 'thunderstorm with heavy rain':
          this.clima = 'Tormenta con lluvia intensa';
          break;
        case 'light thunderstorm':
          this.clima = 'Tormenta ligera';
          break;
        case 'thunderstorm':
          this.clima = 'Tormenta';
          break;
        case 'heavy thunderstorm':
          this.clima = 'Tormenta fuerte';
          break;
        case 'ragged thunderstorm':
          this.clima = 'Tormenta irregular';
          break;
        case 'thunderstorm with light drizzle':
          this.clima = 'Tormenta con llovizna ligera';
          break;
        case 'thunderstorm with drizzle':
          this.clima = 'Tormenta con llovizna';
          break;
        case 'thunderstorm with heavy drizzle':
          this.clima = 'Tormenta con llovizna intensa';
          break;

        case 'light intensity drizzle':
          this.clima = 'Llovizna de intensidad ligera';
          break;
        case 'drizzle':
          this.clima = 'Llovizna';
          break;
        case 'heavy intensity drizzle':
          this.clima = 'Llovizna de gran intensidad';
          break;
        case 'light intensity drizzle rain':
          this.clima = 'Lluvia ligera llovizna';
          break;
        case 'drizzle rain':
          this.clima = 'Llovizna';
          break;
        case 'heavy intensity drizzle rain':
          this.clima = 'Llovizna de gran intensidad';
          break;
        case 'shower rain and drizzle':
          this.clima = 'Aguacero y llovizna';
          break;
        case 'heavy shower rain and drizzle':
          this.clima = 'Aguacero de gran intensidad y llovizna';
          break;
        case 'shower drizzle':
          this.clima = 'Llovizna de aguacero';
          break;

        case 'light rain':
          this.clima = 'Lluvia ligera';
          break;
        case 'moderate rain':
          this.clima = 'Lluvia moderada';
          break;
        case 'heavy intensity rain':
          this.clima = 'Lluvia intensa';
          break;
        case 'very heavy rain':
          this.clima = 'Lluvias muy intensas';
          break;
        case 'extreme rain':
          this.clima = 'Lluvia extrema';
          break;
        case 'freezing rain':
          this.clima = 'Lluvia helada';
          break;
        case 'light intensity shower rain':
          this.clima = 'Lluvia de intensidad ligera';
          break;
        case 'shower rain':
          this.clima = 'Aguacero';
          break;
        case 'heavy intensity shower rain':
          this.clima = 'Chubascos de gran intensidad';
          break;
        case 'ragged shower rain':
          this.clima = 'Aguacero irregular';
          break;

        case 'light snow':
          this.clima = 'Nieve ligera';
          break;
        case 'snow':
          this.clima = 'Nieve';
          break;
        case 'heavy snow':
          this.clima = 'Fuertes nevadas';
          break;
        case 'sleet':
          this.clima = 'Aguanieve';
          break;
        case 'shower sleet':
          this.clima = 'Aguanieve';
          break;
        case 'light rain and snow':
          this.clima = 'Lluvia ligera y nieve';
          break;
        case 'rain and snow':
          this.clima = 'Lluvia y nieve';
          break;
        case 'light shower snow':
          this.clima = 'Lluvia ligera nieve';
          break;
        case 'shower snow':
          this.clima = 'Nieve';
          break;
        case 'heavy shower snow':
          this.clima = 'Lluvia intensa nieve';
          break;

        case 'mist':
          this.clima = 'Neblina';
          break;
        case 'smoke':
          this.clima = 'Smog';
          break;
        case 'haze':
          this.clima = 'Bruma';
          break;
        case 'sand, dust whirls':
          this.clima = 'Arena, remolinos de polvo';
          break;
        case 'fog':
          this.clima = 'Niebla';
          break;
        case 'sand':
          this.clima = 'Arena';
          break;
        case 'dust':
          this.clima = 'Polvo';
          break;
        case 'volcanic ash':
          this.clima = 'Ceniza volcánica';
          break;
        case 'squalls':
          this.clima = 'Chubascos';
          break;
        case 'tornado':
          this.clima = 'Tornado';
          break;

        case 'clear sky':
          this.clima = 'Cielo limpio';
          break;
        case 'few clouds':
          this.clima = 'Nubes dispersas';
          break;
        case 'scattered clouds':
          this.clima = 'Nubes dispersas';
          break;
        case 'broken clouds':
          this.clima = 'Nubes dispersas';
          break;
        case 'overcast clouds':
          this.clima = 'Nublado';
          break;

        case 'tropical storm':
          this.clima = 'Tormenta tropical';
          break;
        case 'hurricane':
          this.clima = 'Huracán';
          break;
        case 'cold':
          this.clima = 'Frío';
          break;
        case 'hot':
          this.clima = 'Calor';
          break;
        case 'windy':
          this.clima = 'Ventoso';
          break;
        case 'hail':
          this.clima = 'Granizo';
          break;
        case 'calm':
          this.clima = 'Calmo';
          break;
        case 'light breeze':
          this.clima = 'Brisa ligera';
          break;
        case 'gentle breeze':
          this.clima = 'Brisa suave';
          break;
        case 'moderate breeze':
          this.clima = 'Brisa moderada';
          break;
        case 'fresh breeze':
          this.clima = 'Brisa fresca';
          break;
        case 'strong breeze':
          this.clima = 'Brisa intensa';
          break;
        case 'high wind, near gale':
          this.clima = 'Viento fuerte, cerca de un vendaval';
          break;
        case 'gale':
          this.clima = 'Vendaval';
          break;
        case 'severe gale':
          this.clima = 'Vendaval severo';
          break;
        case 'storm':
          this.clima = 'Tormenta';
          break;
        case 'violent storm':
          this.clima = 'Tormenta violenta';
          break;

        default:
          this.clima = data.weather[0].description;
          break;
      }

      this.viento = Math.round(data.wind.speed * 60 * 60 / 1000);
      if(data.wind.deg > 348.75 && data.wind.deg <= 11.25 || data.wind.deg == 0) {
        this.direccionViento = 'N';
      }
      else if(data.wind.deg > 11.25 && data.wind.deg <= 33.75) {
        this.direccionViento = 'NNE';
      }
      else if(data.wind.deg > 33.75 && data.wind.deg <= 56.25) {
        this.direccionViento = 'NE';
      }
      else if(data.wind.deg > 56.25 && data.wind.deg <= 78.75) {
        this.direccionViento = 'ENE';
      }
      else if(data.wind.deg > 78.75 && data.wind.deg <= 101.25) {
        this.direccionViento = 'E';
      }
      else if(data.wind.deg > 101.25 && data.wind.deg <= 123.75) {
        this.direccionViento = 'ESE';
      }
      else if(data.wind.deg > 123.75 && data.wind.deg <= 146.25) {
        this.direccionViento = 'SE';
      }
      else if(data.wind.deg > 146.25 && data.wind.deg <= 168.75) {
        this.direccionViento = 'SSE';
      }
      else if(data.wind.deg > 168.75 && data.wind.deg <= 191.25) {
        this.direccionViento = 'S';
      }
      else if(data.wind.deg > 191.25 && data.wind.deg <= 213.75) {
        this.direccionViento = 'SSO';
      }
      else if(data.wind.deg > 213.75 && data.wind.deg <= 236.25) {
        this.direccionViento = 'SO';
      }
      else if(data.wind.deg > 236.25 && data.wind.deg <= 258.75) {
        this.direccionViento = 'OSO';
      }
      else if(data.wind.deg > 258.75 && data.wind.deg <= 281.25) {
        this.direccionViento = 'O';
      }
      else if(data.wind.deg > 281.25 && data.wind.deg <= 303.75) {
        this.direccionViento = 'ONO';
      }
      else if(data.wind.deg > 303.75 && data.wind.deg <= 326.25) {
        this.direccionViento = 'NO';
      }
      else if(data.wind.deg > 326.25 && data.wind.deg <= 348.75) {
        this.direccionViento = 'NNO';
      }
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }
}
