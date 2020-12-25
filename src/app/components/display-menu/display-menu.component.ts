import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-display-menu',
  templateUrl: './display-menu.component.html',
  styleUrls: ['./display-menu.component.css']
})
export class DisplayMenuComponent implements OnInit {

  id:any;
  menu:any;
    constructor(private activateRoute:ActivatedRoute,
      private menuService:MenuService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
      this.menuService.getMenuById(this.id).subscribe(
        (data) =>{
          console.log('data',data);
          this.menu= data.menu;
        }
      )
  }

}
