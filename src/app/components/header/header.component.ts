import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connectedUser: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    console.log('connectedUser',this.connectedUser);
  }
  goToContact() {
    this.router.navigate(['contact']);

  }
  logout(){
    localStorage.removeItem('connectedUser');
    location.reload();
  }
}
