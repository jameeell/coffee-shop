import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-edit-personnel',
  templateUrl: './edit-personnel.component.html',
  styleUrls: ['./edit-personnel.component.css']
})
export class EditPersonnelComponent implements OnInit {

  id:any;
  Personnel: any ;
  //2-declarer le formGroup
  editPersonnelForm: FormGroup;
  //3-dclarer le formBuilder qui construit le formgroup 
    constructor(private formBuilder: FormBuilder,
      private personnelService:PersonnelService,
      private router:Router,
      private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.editPersonnelForm = this.formBuilder.group({
      name: [''],
      role: [''],
      tel: [''],
      image:['']
    });
    this.personnelService.getPersonnelById(this.id).subscribe(
      data=>{
        this.Personnel=data.personnel;
      }
    )
  }
  editPersonnel(){
    console.log('this is the personnel add',this.Personnel);
   this.personnelService.editPersonnel(this.Personnel).subscribe(
     ()=>{
       console.log('changed');
       this.router.navigate(['admin']);
     }
   )
  }
}
