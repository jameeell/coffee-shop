import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  Reservation:any={};
  reservationForm:FormGroup;
  message: any ;
constructor(
  private formBuilder:FormBuilder,
  private reservationService: ReservationService,
  private router:Router
  ){ }
  ngOnInit(): void {
   this.reservationForm = this.formBuilder.group({
    name: [''],
    place: [''],
    nbPersonnes: [''],
    tel: [''],
    date: [''],
    time: [''],
    note: ['']
  })
  }
//fonction addReservation 
addReservations(){
  console.log('this is the reservation add',this.Reservation);
  this.reservationService.addReservation(this.Reservation).subscribe(
    () => {
      console.log('added reservation successfully');
      // message a envoyer par email
      this.message= 'le client '+this.Reservation.name+ ' pour le numero: '+this.Reservation.tel+' a reserver pour la date : '
      +this.Reservation.date+' a l heure : '+this.Reservation.time+' pour nombre de personne = '+this.Reservation.nbPersonnes
      +' pour la place '+this.Reservation.place+' avec la note '+this.Reservation.note;
    // appelle du envoie mail : envoyerMailReservation(recepteur d'email , message d'email a envoyer)
      this.reservationService.envoyerMailReservation('jamaloham.1990@gmail.com',this.message).subscribe(
        (data)=>
       {
         console.log(data);
         this.router.navigate(['reservation']);
        });
    }
  )
}
}
