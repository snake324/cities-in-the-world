import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  
  cities: any[] = [];
  mostPopularCity: any = {};

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.citiesService.getCities().subscribe(data => {
      this.cities = data.cities;
      this.sortCitiesByPopularity();
      this.mostPopularCity = this.cities[0];
    });
  }

  sortCitiesByPopularity() {
    this.cities.sort((a, b) => +a.popular - +b.popular);
  }
}
