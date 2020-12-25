import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  Menu:any={};
    menuForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private menuService: MenuService,
    private router:Router
    ){ }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      name: [''],
      price: [''],
      type: [''],
      quantities: [''],
      image: ['']
    })

  }
  //fonction addMenu
  addMenus(){
    console.log('this is the menu add',this.Menu);
    this.menuService.addMenu(this.Menu).subscribe(
      () => {
        console.log('added menu successfully');
        this.router.navigate(['menu']);
      }
    )
  }
 }
