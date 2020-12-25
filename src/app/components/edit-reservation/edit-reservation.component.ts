import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
  id: any;
  Reservation: any;
  //declarer le formGroup
  editReservationForm: FormGroup;
  //declarer le formBuilder qui construit le formgroup 
  constructor(private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editReservationForm = this.formBuilder.group({
      name: [''],
      place: [''],
      nbPersonnes: [''],
      tel: [''],
      date: [''],
      time: [''],
      note: ['']
    });
    this.reservationService.getReservationById(this.id).subscribe(
      data => {
        this.Reservation = data.reservation;
      }
    )
  }
  editReservation() {
    console.log('this is the reservation add', this.Reservation);
    this.reservationService.editReservation(this.Reservation).subscribe(
      () => {
        console.log('changed');
        this.router.navigate(['admin']);
      }
    )
  }

}
