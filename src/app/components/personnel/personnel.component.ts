import { Component, OnInit } from '@angular/core';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  allPersonnels: any;
  constructor(private personnelServise :PersonnelService ) {}

  ngOnInit(): void {
    this.personnelServise. getAllPersonnels().subscribe(
      data =>{
        this.allPersonnels =data.personnels;
      }
    )
  }

}
