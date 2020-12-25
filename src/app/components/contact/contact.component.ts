import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //1- declarer lobjet JSON 
  contact: any = {};
  //2-declarer le formGroup
  contactForm: FormGroup;
  //3-dclarer le formBuilder qui construit le formgroup 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      tel: [''],
      subject: ['']


    })
  }
  addContact() {
    console.log('here my contact object', this.contact)
    alert('boutton cliked');
  }
}
