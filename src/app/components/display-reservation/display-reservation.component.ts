import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-display-reservation',
  templateUrl: './display-reservation.component.html',
  styleUrls: ['./display-reservation.component.css']
})
export class DisplayReservationComponent implements OnInit {

  id:any;
  reservation:any;
    constructor(private activateRoute:ActivatedRoute,
      private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.reservationService.getReservationById(this.id).subscribe(
      (data) =>{
        console.log('data',data);
        this.reservation= data.reservation;
      }
    )
  }

}
