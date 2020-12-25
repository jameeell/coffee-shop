import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {
  @Input () personnelInput:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
