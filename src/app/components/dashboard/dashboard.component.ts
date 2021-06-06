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
      this.temperature = Math.round(data.temperature);
      this.humidity = data.humidity;
      this.visibility = data.visibility;
      this.pressure = data.pressure;

      this.weather = this._translatorService.translateEnglishToEspanish(data.weather_description);

      this.wind = data.wind.speed;
      this.windDirection = data.wind.direction;

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
