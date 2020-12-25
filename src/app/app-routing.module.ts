import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { AddPersonnelComponent } from './components/add-personnel/add-personnel.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayMenuComponent } from './components/display-menu/display-menu.component';
import { DisplayPersonnelComponent } from './components/display-personnel/display-personnel.component';
import { DisplayReservationComponent } from './components/display-reservation/display-reservation.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { EditPersonnelComponent } from './components/edit-personnel/edit-personnel.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add-menu',  canActivate : [AuthGuardService],component: AddMenuComponent},
  {path: 'add-personnel', canActivate : [AuthGuardService], component: AddPersonnelComponent},
  {path: 'add-reservation', canActivate : [AuthGuardService], component: AddReservationComponent },
  {path: 'admin', canActivate : [AuthGuardService], component: AdminComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'display-menu/:id', canActivate : [AuthGuardService], component: DisplayMenuComponent},
  {path: 'display-reservation/:id', canActivate : [AuthGuardService], component: DisplayReservationComponent},
  {path: 'display-personnel/:id', canActivate : [AuthGuardService], component: DisplayPersonnelComponent},
  {path: 'edit-menu/:id', canActivate : [AuthGuardService], component: EditMenuComponent},
  {path: 'edit-personnel/:id', canActivate : [AuthGuardService], component: EditPersonnelComponent},
  {path: 'edit-reservation/:id', canActivate : [AuthGuardService], component: EditReservationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'personnel', component: PersonnelComponent},
  {path: 'reservation', canActivate : [AuthGuardService], component: ReservationComponent},
  {path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
