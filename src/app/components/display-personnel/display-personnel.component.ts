import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-display-personnel',
  templateUrl: './display-personnel.component.html',
  styleUrls: ['./display-personnel.component.css']
})
export class DisplayPersonnelComponent implements OnInit {

  id:any;
  personnel:any;
    constructor(private activateRoute:ActivatedRoute,
      private personnelService:PersonnelService) { }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
      this.personnelService.getPersonnelById(this.id).subscribe(
        (data) =>{
          console.log('data',data);
          this.personnel= data.personnel;
        }
      )
  }

}
