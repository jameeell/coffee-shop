import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { DisplayMenuComponent } from './components/display-menu/display-menu.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { EditPersonnelComponent } from './components/edit-personnel/edit-personnel.component';
import { AddPersonnelComponent } from './components/add-personnel/add-personnel.component';
import { DisplayPersonnelComponent } from './components/display-personnel/display-personnel.component';
import { DisplayReservationComponent } from './components/display-reservation/display-reservation.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { PersonnelsComponent } from './components/personnel/personnels/personnels.component';
import { ReservationsComponent } from './components/reservation/reservations/reservations.component';
import { MenusComponent } from './components/menu/menus/menus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    PersonnelComponent,
    MenuComponent,
    AddMenuComponent,
    DisplayMenuComponent,
    EditMenuComponent,
    EditPersonnelComponent,
    AddPersonnelComponent,
    DisplayPersonnelComponent,
    DisplayReservationComponent,
    ReservationComponent,
    AddReservationComponent,
    EditReservationComponent,
    MenusComponent,
    PersonnelsComponent,
    ReservationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
