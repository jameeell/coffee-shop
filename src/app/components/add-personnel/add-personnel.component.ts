import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.css']
})
export class AddPersonnelComponent implements OnInit {
Personnel: any={};
personnelForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private personnelService: PersonnelService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.personnelForm = this.formBuilder.group({
      name: [''],
      role: [''],
      tel: [''],
      image: ['']
    })

  }
 //fonction addPersonnel
 addPersonnels(){
  console.log('this is the personnel add',this.Personnel);
  this.personnelService.addPersonnel(this.Personnel).subscribe(
    () => {
      console.log('added personnel successfully');
      this.router.navigate(['personnel']);
    }
  )
}
}
