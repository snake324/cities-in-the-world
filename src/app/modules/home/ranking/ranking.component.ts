import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit{
  cities: any[] = [];

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.citiesService.getCities().subscribe((data) => {
      this.cities = data.cities;
      this.sortCitiesByPopularity();
    });
  }

  sortCitiesByPopularity() {
    this.cities.sort((a, b) => +a.popular - +b.popular);
  }
}
