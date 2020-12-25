import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  id: any;
  Menu: any;
  //2-declarer le formGroup
  editMenuForm: FormGroup;
  //3-dclarer le formBuilder qui construit le formgroup 
  constructor(private formBuilder: FormBuilder,
    private menuService: MenuService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editMenuForm = this.formBuilder.group({
      name: [''],
      price: [''],
      type: [''],
      quantities: [''],
      image: ['']
    });
    this.menuService.getMenuById(this.id).subscribe(
      data => {
        this.Menu = data.menu;
      }
    )
  }
  editMenu() {
    console.log('this is the menu add', this.Menu);
    this.menuService.editMenu(this.Menu).subscribe(
      () => {
        console.log('changed');
        this.router.navigate(['admin']);
      }
    )
  }
}
