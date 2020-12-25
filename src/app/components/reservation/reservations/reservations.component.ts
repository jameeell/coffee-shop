import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
@Input() reservationInput:any;
  constructor() { }

  ngOnInit(): void {
  }

}
