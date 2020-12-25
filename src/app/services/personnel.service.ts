import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  personnelUrl = 'http://localhost:3000';

  constructor(private httpclient:HttpClient) { } 
  //get all personnel
  getAllPersonnels() {
    return this.httpclient.get<{message:string, personnels:any}>(`${this.personnelUrl}/api/myPersonnels`);
  }
  //get one object 
  getPersonnelById(id:string){
    return this.httpclient.get<{personnel:any}>(`${this.personnelUrl}/api/getPersonnel/${id}`);
    
  }
  // action d  ajouter 
  addPersonnel(personnel: any) {
    return this.httpclient.post(`${this.personnelUrl}/api/addPersonnel`, personnel);
  }
  // delete object from DB
  deletePersonnel(id: string) {
    console.log('id service', id);
    
    return this.httpclient.delete(`${this.personnelUrl}/api/deletePersonnel/${id}`);
  }
  editPersonnel(personnel:any){
    return this.httpclient.put<{message:string}>(`${this.personnelUrl}/api/editPersonnel/${personnel._id}`,personnel);
  }
}
