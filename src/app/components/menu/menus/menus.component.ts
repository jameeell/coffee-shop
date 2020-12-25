import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  @Input () menuInput:any;

  constructor() { }

  ngOnInit(): void {
  }

}
