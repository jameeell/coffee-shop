import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationUrl = 'http://localhost:3000';

  constructor(private httpclient:HttpClient) { } 
  //get all reservations
  getAllReservations() {
    return this.httpclient.get<{message:string, reservations:any}>(`${this.reservationUrl}/api/myReservations`);
  }
  //get one object 
  getReservationById(id:string){
    return this.httpclient.get<{reservation:any}>(`${this.reservationUrl}/api/getReservation/${id}`);
    
  }
  // action d  ajouter 
  addReservation(reservation: any) {
    return this.httpclient.post(`${this.reservationUrl}/api/addReservation`, reservation);
  }
  // delete object from DB
  deleteReservation(id: string) {
    console.log('id service', id);
    
    return this.httpclient.delete(`${this.reservationUrl}/api/deleteReservation/${id}`);
  }
  //action modifier
  editReservation(reservation:any){
    return this.httpclient.put<{message:string}>(`${this.reservationUrl}/api/editReservation/${reservation._id}`,reservation);
  }

  //envoyer email
  envoyerMailReservation(recevier_email: any , message: any){
    let body = {
      'recevier_email': recevier_email,
      'message' : message
    }
    return this.httpclient.post(`${this.reservationUrl}/api/sendmail`, body );
  }
}
