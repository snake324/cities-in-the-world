import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private citiesUrl = 'assets/cities.json';

  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get(this.citiesUrl);
  }
}
