import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
@Component({
  selector: 'app-most-popular-restaurant',
  templateUrl: './most-popular-restaurant.component.html',
  styleUrls: ['./most-popular-restaurant.component.scss']
})
export class MostPopularRestaurantComponent implements OnInit {
  cities: any[] = [];
  popularRestaurants: any[] = [];

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.citiesService.getCities().subscribe(data => {
      this.cities = data.cities;
      this.sortCitiesByPopularity();
      const top4Cities = this.cities.slice(0, 4);
      this.popularRestaurants = top4Cities.flatMap(city => city.popularRestaurants);
    });
  }

  sortCitiesByPopularity() {
    this.cities.sort((a, b) => +a.popular - +b.popular);
  }
}
