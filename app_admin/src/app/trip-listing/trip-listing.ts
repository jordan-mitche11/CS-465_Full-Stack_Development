import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})

export class TripListingComponent implements OnInit {
  trips: Array <any> = trips;

  constructor() {}

  ngOnInit(): void {}

}
