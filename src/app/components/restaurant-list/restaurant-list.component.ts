import { Component, OnInit } from '@angular/core';
import { Reasturant } from '../../model/reasturant';
import { DataService } from '../../services/data.service';
import { Reastuarants } from '../../model/reasturants';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  reasturants: Reasturant[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((value: Reastuarants) => {
      if (value) {
        this.reasturants = value.restaurants;
      }
    });
  }
}
