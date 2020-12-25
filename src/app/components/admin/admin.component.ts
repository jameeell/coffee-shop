import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { PersonnelService } from 'src/app/services/personnel.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allMenus: any;
  allPersonnels : any;
  allReservations : any;
  allUsers : any;
  constructor(
    private menuService: MenuService,
    private personnelService : PersonnelService,
    private reservationService: ReservationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMenus();
    this.getPersonnels();
    this.getReservations();
    this.getUsers();
  }
  // for menu
  //get menu
  getMenus() {
    this.menuService.getAllMenus().subscribe(
      data => {
        this.allMenus = data.menus;
      }
    )
  }
  //display menu
  displayMenus(id: string) {
    this.router.navigate([`display-menu/${id}`]);
  }
  //edit menu
  editMenus(id: number) {
    this.router.navigate([`edit-menu/${id}`])
  }
  //delete menu
  deleteMenus(id: string) {
    console.log(id);

    this.menuService.deleteMenu(id).subscribe(
      () => {
        this.getMenus();
      }
    )
  }
  //for personnels
  //get personnel
  getPersonnels() {
    this.personnelService.getAllPersonnels().subscribe(
      data => {
        this.allPersonnels = data.personnels;
        console.log(data);
    console.log('rrr',this.allPersonnels );
        
      }
    )
    
  }
  //display personnel
  displayPersonnels(id: string) {
    this.router.navigate([`display-personnel/${id}`]);
  }
  //edit personnel
  editPersonnels(id: number) {
    this.router.navigate([`edit-personnel/${id}`]);
  }
  //delete personnel
  deletePersonnels(id: string) {
    console.log(id);

    this.personnelService.deletePersonnel(id).subscribe(
      () => {
        this.getPersonnels();
      }
    )
  }
  // for reservation 
  //get reservation
  getReservations() {
    this.reservationService.getAllReservations().subscribe(
      data => {
        this.allReservations = data.reservations;
      }
    )
  }
  //display reservation
  displayReservations(id: string) {
    this.router.navigate([`display-reservation/${id}`]);
  }
  //edit reservation
  editReservations(id: number) {
    this.router.navigate([`edit-reservation/${id}`])
  }
  //delete reservation
  deleteReservations(id: string) {
    console.log(id);

    this.reservationService.deleteReservation(id).subscribe(
      () => {
        this.getReservations();
      }
    )
  }
  //pour user
  //get all users
  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.allUsers = data.users;

      }
    )
  }
 //delete user
  deleteUsers(id: string) {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getUsers();
      }
    )
  }
}
