import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=a201fe3a1bbaa64893549315c56f0c2e&query=' + location
    );
  }
}
