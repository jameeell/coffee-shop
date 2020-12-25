import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  //get all user
  getAllUsers() {
    return this.httpClient.get<{ message: string, users: any }>(`${this.userUrl}/api/allUsers`);
  }
  //get uset (display)
  getUserById(id: string) {
    return this.httpClient.get<{user:any}>(`${this.userUrl}/api/getUser/${id}`);
  }
  //add user 
  addUser(user: any , image:File) {
    let formData = new FormData();
    formData.append('name',user.name);
    formData.append('email',user.email);
    formData.append('pwd',user.pwd);
    formData.append('role',user.role);
    formData.append('tel',user.tel);
    formData.append('image',image);
// on va ajoute le msg qui a affiche au terminal
    return this.httpClient.post<{message:string}>(`${this.userUrl}/api/addUser`, formData);
  }
  //delete user 
  deleteUser(id: string) {
    return this.httpClient.delete(`${this.userUrl}/api/deleteUser/${id}`);

  }
  
  //fn login
  login(user:any){
     return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/api/login`,user);
  }
}
