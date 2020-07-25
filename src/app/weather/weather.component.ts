import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { faCloud} from '@fortawesome/free-solid-svg-icons';
import { faWater} from '@fortawesome/free-solid-svg-icons';
import { faWind} from '@fortawesome/free-solid-svg-icons';
import { faTemperatureLow} from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';







@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  cloudIcon = faCloud;
  watericon = faWater;
  windicon = faWind;
  tempicon = faTemperatureLow;
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    AOS.init();
  }

  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => { this.weatherData = data;
      console.log(this.weatherData);
      });
  }

}
