import { Log } from '../../models/Log';
import { Component, OnInit } from '@angular/core';
import { NgbModal , ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { LogModalComponent } from '../log-modal/log-modal.component';
import { config } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  selectedEnvironment = "Produção";

  selectedLevel = "All";

  enviroments = [ "Produção" , "Development", "Test" ];
  levels = ["All" ,"Level" , "Descrição", "Origem"];
  logs : Array<Log> = [
    {
      "id": null,
      "title" : "Not Foud Exception",
      "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED",
      "occurrencies" : 3,
      "timestamp" : new Date(),
      "environment" : "development",
      "origin" : "128.168.5.1",
      "level" : "debug",
      "user" : {
        "name" : "Carlos Souza",
        "email" : "carlos@gmail.com" ,
        "token" : "gwam4fuu5zcmxcchc44ac9r3e"
      }
    },
    {
      "id": null,
      "title" : "Not Foud Exception",
      "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED asjahushashushausuausuashaush",
      "occurrencies" : 3,
      "timestamp" : new Date(),
      "environment" : "development",
      "origin" : "128.168.5.1",
      "level" : "error",
      "user" : {
        "name" : "Carlos Souza",
        "email" : "carlos@gmail.com" ,
        "token" : "gwam4fuu5zcmxcchc44ac9r3e"
      }
    },
    {
    "id": null,
    "title" : "Not Foud Exception",
    "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED",
    "occurrencies" : 3,
    "timestamp" : new Date(),
    "environment" : "development",
    "origin" : "128.168.5.1",
    "level" : "warning",
    "user" : {
      "name" : "Carlos Souza",
      "email" : "carlos@gmail.com" ,
      "token" : "gwam4fuu5zcmxcchc44ac9r3e"
    }
  },
  {
    "id": null,
    "title" : "Not Foud Exception",
    "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED",
    "occurrencies" : 3,
    "timestamp" : new Date(),
    "environment" : "development",
    "origin" : "128.168.7.2",
    "level" : "debug",
    "user" : {
      "name" : "Neemias Souza",
      "email" : "neesspro@gmail.com" ,
      "token" : "gwam4fuu5zcmxcchc44ac9r3e"
    }
  },
  {
    "id": null,
    "title" : "Not Foud Exception",
    "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED",
    "occurrencies" : 3,
    "timestamp" : new Date(),
    "environment" : "development",
    "origin" : "128.168.5.1",
    "level" : "warning",
    "user" : {
      "name" : "Guilherme Souza",
      "email" : "gui@gmail.com" ,
      "token" : "gwam4fuu5zcmxcchc44ac9r3e"
    }
  },
  {
    "id": null,
    "title" : "Not Foud Exception",
    "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED",
    "occurrencies" : 3,
    "timestamp" : new Date(),
    "environment" : "development",
    "origin" : "128.168.5.1",
    "level" : "error",
    "user" : {
      "name" : "Matheus Souza",
      "email" : "matheus@gmail.com" ,
      "token" : "gwam4fuu5zcmxcchc44ac9r3e"
    }
  },
  {
    "id": null,
    "title" : "Not Foud Exception",
    "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED",
    "occurrencies" : 3,
    "timestamp" : new Date(),
    "environment" : "development",
    "origin" : "128.168.5.1",
    "level" : "debug",
    "user" : {
      "name" : "Gabriel Souza",
      "email" : "gab@gmail.com" ,
      "token" : "gwam4fuu5zcmxcchc44ac9r3e"
    }
  },
  {
    "id": null,
    "title" : "400 Bad Request",
    "description" :  "Failed to load resource: net::ERR_CONNECTION_REFUSED",
    "occurrencies" : 3,
    "timestamp" : new Date(),
    "environment" : "development",
    "origin" : "128.168.5.1",
    "level" : "error",
    "user" : {
      "name" : "Bruno Souza",
      "email" : "brunopro@gmail.com" ,
      "token" : "gwam4fusasa54s84sasac9r3e"
    }
  }];
  closeResult = '';

  open() {
    let modalConfig = new NgbModalConfig(); 
    modalConfig.centered = true;
    
    const modalRef = this.modalService.open(LogModalComponent, modalConfig);
    modalRef.componentInstance.name = 'World';
  }

}
