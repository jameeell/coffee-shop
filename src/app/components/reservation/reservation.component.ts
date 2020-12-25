import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  allReservations: any;
  constructor( private reservationService: ReservationService) { }
  ngOnInit(): void {
    this.reservationService. getAllReservations().subscribe(
      data =>{
        this.allReservations =data.reservations;
      }
    )
  }

}
