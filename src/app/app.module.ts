import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LogosComponent } from './components/logos/logos.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogModalComponent } from './components/log-modal/log-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogService } from './services/services';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LogosComponent,
    HomeComponent,
    LogModalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
