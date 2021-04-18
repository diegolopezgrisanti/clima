import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //urlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  city = 'BUENOS AIRES';
  temperature = 0;
  humidity = 0;
  weather = '';
  wind = 0;
  windDirection = '';
  visibility = 0;
  pressure = 0;
  query = false;
  loading = false;
  showError = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
    this.obtenerClima();
  }

  obtenerClima() {
    this.query = false;
    this.loading = true;

    this._climaService.getClima(this.city).subscribe(data => {

      console.log(data);

      this.loading = false;
      this.query = true;
      this.temperature = Math.round(data.main.temp);
      this.humidity = data.main.humidity;
      this.visibility = data.visibility;
      this.pressure = data.main.pressure;

      switch (data.weather[0].description) {
        case 'thunderstorm with light rain':
          this.weather = 'Tormenta con lluvia ligera';
          break;
        case 'thunderstorm with rain':
          this.weather = 'Tormenta con lluvia';
          break;
        case 'thunderstorm with heavy rain':
          this.weather = 'Tormenta con lluvia intensa';
          break;
        case 'light thunderstorm':
          this.weather = 'Tormenta ligera';
          break;
        case 'thunderstorm':
          this.weather = 'Tormenta';
          break;
        case 'heavy thunderstorm':
          this.weather = 'Tormenta fuerte';
          break;
        case 'ragged thunderstorm':
          this.weather = 'Tormenta irregular';
          break;
        case 'thunderstorm with light drizzle':
          this.weather = 'Tormenta con llovizna ligera';
          break;
        case 'thunderstorm with drizzle':
          this.weather = 'Tormenta con llovizna';
          break;
        case 'thunderstorm with heavy drizzle':
          this.weather = 'Tormenta con llovizna intensa';
          break;

        case 'light intensity drizzle':
          this.weather = 'Llovizna de intensidad ligera';
          break;
        case 'drizzle':
          this.weather = 'Llovizna';
          break;
        case 'heavy intensity drizzle':
          this.weather = 'Llovizna de gran intensidad';
          break;
        case 'light intensity drizzle rain':
          this.weather = 'Lluvia ligera llovizna';
          break;
        case 'drizzle rain':
          this.weather = 'Llovizna';
          break;
        case 'heavy intensity drizzle rain':
          this.weather = 'Llovizna de gran intensidad';
          break;
        case 'shower rain and drizzle':
          this.weather = 'Aguacero y llovizna';
          break;
        case 'heavy shower rain and drizzle':
          this.weather = 'Aguacero de gran intensidad y llovizna';
          break;
        case 'shower drizzle':
          this.weather = 'Llovizna de aguacero';
          break;

        case 'light rain':
          this.weather = 'Lluvia ligera';
          break;
        case 'moderate rain':
          this.weather = 'Lluvia moderada';
          break;
        case 'heavy intensity rain':
          this.weather = 'Lluvia intensa';
          break;
        case 'very heavy rain':
          this.weather = 'Lluvias muy intensas';
          break;
        case 'extreme rain':
          this.weather = 'Lluvia extrema';
          break;
        case 'freezing rain':
          this.weather = 'Lluvia helada';
          break;
        case 'light intensity shower rain':
          this.weather = 'Lluvia de intensidad ligera';
          break;
        case 'shower rain':
          this.weather = 'Aguacero';
          break;
        case 'heavy intensity shower rain':
          this.weather = 'Chubascos de gran intensidad';
          break;
        case 'ragged shower rain':
          this.weather = 'Aguacero irregular';
          break;

        case 'light snow':
          this.weather = 'Nieve ligera';
          break;
        case 'snow':
          this.weather = 'Nieve';
          break;
        case 'heavy snow':
          this.weather = 'Fuertes nevadas';
          break;
        case 'sleet':
          this.weather = 'Aguanieve';
          break;
        case 'shower sleet':
          this.weather = 'Aguanieve';
          break;
        case 'light rain and snow':
          this.weather = 'Lluvia ligera y nieve';
          break;
        case 'rain and snow':
          this.weather = 'Lluvia y nieve';
          break;
        case 'light shower snow':
          this.weather = 'Lluvia ligera nieve';
          break;
        case 'shower snow':
          this.weather = 'Nieve';
          break;
        case 'heavy shower snow':
          this.weather = 'Lluvia intensa nieve';
          break;

        case 'mist':
          this.weather = 'Neblina';
          break;
        case 'smoke':
          this.weather = 'Smog';
          break;
        case 'haze':
          this.weather = 'Bruma';
          break;
        case 'sand, dust whirls':
          this.weather = 'Arena, remolinos de polvo';
          break;
        case 'fog':
          this.weather = 'Niebla';
          break;
        case 'sand':
          this.weather = 'Arena';
          break;
        case 'dust':
          this.weather = 'Polvo';
          break;
        case 'volcanic ash':
          this.weather = 'Ceniza volcánica';
          break;
        case 'squalls':
          this.weather = 'Chubascos';
          break;
        case 'tornado':
          this.weather = 'Tornado';
          break;

        case 'clear sky':
          this.weather = 'Cielo limpio';
          break;
        case 'few clouds':
          this.weather = 'Nubes dispersas';
          break;
        case 'scattered clouds':
          this.weather = 'Nubes dispersas';
          break;
        case 'broken clouds':
          this.weather = 'Nubes dispersas';
          break;
        case 'overcast clouds':
          this.weather = 'Nublado';
          break;

        case 'tropical storm':
          this.weather = 'Tormenta tropical';
          break;
        case 'hurricane':
          this.weather = 'Huracán';
          break;
        case 'cold':
          this.weather = 'Frío';
          break;
        case 'hot':
          this.weather = 'Calor';
          break;
        case 'windy':
          this.weather = 'Ventoso';
          break;
        case 'hail':
          this.weather = 'Granizo';
          break;
        case 'calm':
          this.weather = 'Calmo';
          break;
        case 'light breeze':
          this.weather = 'Brisa ligera';
          break;
        case 'gentle breeze':
          this.weather = 'Brisa suave';
          break;
        case 'moderate breeze':
          this.weather = 'Brisa moderada';
          break;
        case 'fresh breeze':
          this.weather = 'Brisa fresca';
          break;
        case 'strong breeze':
          this.weather = 'Brisa intensa';
          break;
        case 'high wind, near gale':
          this.weather = 'Viento fuerte, cerca de un vendaval';
          break;
        case 'gale':
          this.weather = 'Vendaval';
          break;
        case 'severe gale':
          this.weather = 'Vendaval severo';
          break;
        case 'storm':
          this.weather = 'Tormenta';
          break;
        case 'violent storm':
          this.weather = 'Tormenta violenta';
          break;

        default:
          this.weather = data.weather[0].description;
          break;
      }

      this.wind = Math.round(data.wind.speed * 60 * 60 / 1000);
      if(data.wind.deg > 348.75 && data.wind.deg <= 11.25 || data.wind.deg == 0) {
        this.windDirection = 'N';
      }
      else if(data.wind.deg > 11.25 && data.wind.deg <= 33.75) {
        this.windDirection = 'NNE';
      }
      else if(data.wind.deg > 33.75 && data.wind.deg <= 56.25) {
        this.windDirection = 'NE';
      }
      else if(data.wind.deg > 56.25 && data.wind.deg <= 78.75) {
        this.windDirection = 'ENE';
      }
      else if(data.wind.deg > 78.75 && data.wind.deg <= 101.25) {
        this.windDirection = 'E';
      }
      else if(data.wind.deg > 101.25 && data.wind.deg <= 123.75) {
        this.windDirection = 'ESE';
      }
      else if(data.wind.deg > 123.75 && data.wind.deg <= 146.25) {
        this.windDirection = 'SE';
      }
      else if(data.wind.deg > 146.25 && data.wind.deg <= 168.75) {
        this.windDirection = 'SSE';
      }
      else if(data.wind.deg > 168.75 && data.wind.deg <= 191.25) {
        this.windDirection = 'S';
      }
      else if(data.wind.deg > 191.25 && data.wind.deg <= 213.75) {
        this.windDirection = 'SSO';
      }
      else if(data.wind.deg > 213.75 && data.wind.deg <= 236.25) {
        this.windDirection = 'SO';
      }
      else if(data.wind.deg > 236.25 && data.wind.deg <= 258.75) {
        this.windDirection = 'OSO';
      }
      else if(data.wind.deg > 258.75 && data.wind.deg <= 281.25) {
        this.windDirection = 'O';
      }
      else if(data.wind.deg > 281.25 && data.wind.deg <= 303.75) {
        this.windDirection = 'ONO';
      }
      else if(data.wind.deg > 303.75 && data.wind.deg <= 326.25) {
        this.windDirection = 'NO';
      }
      else if(data.wind.deg > 326.25 && data.wind.deg <= 348.75) {
        this.windDirection = 'NNO';
      }
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.city = '';
    }, 3000);
  }
}
