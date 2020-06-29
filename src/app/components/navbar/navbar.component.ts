import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router :Router) { }

  user : User;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

}
