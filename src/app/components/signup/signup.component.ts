import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/comparePwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  message:string;
  imagePreview:any;
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.minLength(3),Validators.required]],
      email: ['', [Validators.email,Validators.required]],
      pwd: ['', [Validators.minLength(2),Validators.maxLength(6)]],
      confirmPwd: [''],
      tel: [''],
      image: [''],
      role: ['']

    },
    {
      validator: MustMatch('pwd','confirmPwd')
    })
  }

  //fn signup
  signup(user:any) {
    let secondPart = user.email.substring(user.email.indexOf("@"),
    user.email.Length);
    user.role = (secondPart === '@admin.com')? 'admin':'user';
     console.log('user ',user);
     //integration de fn addUser 
   this.userService.addUser(user,this.signupForm.value.image).subscribe(
     (data)=>{
       console.log('data',data.message); 
       //verif de user
       if (data.message == 'User validation failed') {
         this.message= 'user exist !!!'
         console.log('noo');
       } else if(data.message=='ok') {
         console.log('yess');
         // go to page login
         this.router.navigate( ['login'])
       }
     }
   )
 
   }
   onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('File',file);
    this.signupForm.patchValue({ image: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
