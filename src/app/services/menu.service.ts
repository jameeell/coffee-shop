import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuUrl = 'http://localhost:3000';

  constructor(private httpclient:HttpClient) { } 
  //get all menu
  getAllMenus() {
    return this.httpclient.get<{message:string, menus:any}>(`${this.menuUrl}/api/myMenus`);
  }
  //get one object 
  getMenuById(id:string){
    return this.httpclient.get<{menu:any}>(`${this.menuUrl}/api/getMenu/${id}`);
    
  }
  // action d  ajouter 
  addMenu(menu: any) {
    return this.httpclient.post(`${this.menuUrl}/api/addMenu`, menu);
  }
  // delete object from DB
  deleteMenu(id: string) {
    console.log('id service', id);
    
    return this.httpclient.delete(`${this.menuUrl}/api/deleteMenu/${id}`);
  }
    //action modifier
  editMenu(menu:any){
    return this.httpclient.put<{message:string}>(`${this.menuUrl}/api/editMenu/${menu._id}`,menu);
  }
}
