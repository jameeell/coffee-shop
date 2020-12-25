import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connectedUser: any = {};
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      email: [''],
      pwd: ['']
    })

  }
  loginFn() {
    console.log('here my connected user', this.connectedUser);
    this.userService.login(this.connectedUser).subscribe(
      (data) => {
        console.log('message from BE', data.message);
        if (data.message === 'Welcome') {
          location.reload();
          //connectedUser html connectedUser.email
          localStorage.setItem('connectedUser', JSON.stringify(data.user));
          if (data.user.role === 'admin') {
            this.router.navigate(['admin']);

          } else {
            this.router.navigate(['home']);
          }
        }

      })
  }

}
