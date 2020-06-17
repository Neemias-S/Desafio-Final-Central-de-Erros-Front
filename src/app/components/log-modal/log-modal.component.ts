import { Log } from './../../models/Log';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-modal',
  templateUrl: './log-modal.component.html',
  styleUrls: ['./log-modal.component.scss']
})
export class LogModalComponent implements OnInit {

  constructor() { }

  log : Log;
  

  ngOnInit(): void {
    this.log = JSON.parse(localStorage.getItem("selectedLog"));
  }

}
