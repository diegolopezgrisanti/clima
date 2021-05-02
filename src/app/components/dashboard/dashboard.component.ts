import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { TranslatorService } from 'src/app/services/translation.service';

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



      //   default:
      //     this.weather = data.weather[0].description;
      //     break;
      // }

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
