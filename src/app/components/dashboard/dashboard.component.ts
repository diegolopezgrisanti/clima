import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { TranslatorService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  private readonly weatherImages: any = {
    'thunderstorm600x600_white.png': ['Tormenta con lluvia ligera','Tormenta con lluvia','Tormenta con lluvia intensa','Tormenta ligera','Tormenta','Tormenta fuerte','Tormenta violenta','Tormenta irregular','Tormenta con llovizna ligera','Tormenta con llovizna','Tormenta con llovizna intensa'],
    'cloud-drizzle500x500_white.png': ['Llovizna de intensidad ligera','Llovizna','Llovizna de gran intensidad','Lluvia ligera llovizna','Llovizna','Llovizna de gran intensidad','Aguacero y llovizna','Aguacero de gran intensidad y llovizna','Llovizna de aguacero'],
    'cloud-rain500x500_white.png': ['Lluvia ligera','Lluvia moderada','Lluvia intensa','Lluvias muy intensas','Lluvia extrema','Lluvia helada','Lluvia de intensidad ligera','Aguacero','Chubascos de gran intensidad','Aguacero irregular'],
    'cloud-snow600x600_white.png': ['Nieve ligera','Nieve','Fuertes nevadas','Aguanieve','Lluvia ligera y nieve','Lluvia y nieve','Lluvia ligera nieve','Lluvia intensa nieve'],
    'fog600x600_white.png': ['Neblina','Niebla'],
    'smoke600x600_white.png': ['Smog'],
    'sun-dust600x600_white.png': ['Arena, remolinos de polvo','Arena','Polvo'],
    'volcano600x600_white.png': ['Ceniza volcánica'],
    'tornado600x600_white.png': ['Tornado'],
    'hurricane600x600_white.png': ['Huracán'],
    'temperature-frigid600x600_white.png': ['Frío'],
    'temperature-hot600x600_white.png': ['Calor'],
    'wind600x600_white.png': ['Ventoso','Brisa ligera','Brisa suave','Brisa moderada','Brisa fresca','Brisa intensa','Viento fuerte, cerca de un vendaval','Vendaval','Vendaval severo','Calmo'],
    'cloud-hail600x600_white.png': ['Granizo'],
    'sun400x400_white.png': ['Despejado'],
    'clouds600x600_white.png': ['Nublado'],
    'sun-cloud600x600_white.png': ['Nubes dispersas']
  }

  constructor(private _climaService: ClimaService, private _translatorService: TranslatorService) { }

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

      this.weather = this._translatorService.translateEnglishToEspanish(data.weather[0].description);

      this.wind = Math.round(data.wind.speed * 60 * 60 / 1000);
      if(data.wind.deg > 348.75 || data.wind.deg <= 11.25) {
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

  getWeatherImage(): any {
    let image: string = 'sun400x400_white.png'; //default image
    for(let prop in this.weatherImages){
      if(this.weatherImages[prop].includes(this.weather)) {
        image = prop;
        break;
      }
    }
    return image;
  }

  error() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.city = '';
    }, 3000);
  }
}
