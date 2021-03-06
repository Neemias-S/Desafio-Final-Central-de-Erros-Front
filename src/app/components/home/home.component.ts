import { User } from './../../models/User';
import { Log } from '../../models/Log';
import { Component, OnInit } from '@angular/core';
import { NgbModal , NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { LogModalComponent } from '../log-modal/log-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  
  ngOnInit(): void {
    localStorage.setItem("user", JSON.stringify(this.user));
  }


  // Mocking
  user = new User("Neemias Souza","neesspro@gmail.com", "gwam4fuu5zcmxcchc44ac9r3e", "EncryptedPassword");

  selectedEnvironment = "Produção";

  selectedLevel = "All";

  enviroments = [ "Produção" , "Development", "Test" ];
  levels = ["All" ,"Level" , "Descrição", "Origem"];
  logs : Array<Log> = [
    {
      "id"  : null,
      "title" : "404 Not Found",
      "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
      "origin" : "192.168.0.2",
      "occurrences" : 
      [ 	
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Produção",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
		{
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
		{
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        }
      ],
      "lastOccurrence" : new Date(),
      "level": "Error"
      },
	  
	  
	  {
      "id"  : null,
      "title" : "404 Not Found",
      "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
      "origin" : "192.168.0.2",
      "occurrences" : 
      [ 	
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Produção",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        }
      ],
      "lastOccurrence" : new Date(),
      "level": "Warning"
      },
	  
	  {
      "id"  : null,
      "title" : "404 Not Found",
      "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
      "origin" : "192.168.0.2",
      "occurrences" : 
      [ 	
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Produção",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
		{
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
		{
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        }
      ],
      "lastOccurrence" : new Date(),
      "level": "Debug"
      },
	  {
      "id"  : null,
      "title" : "404 Not Found",
      "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
      "origin" : "192.168.0.2",
      "occurrences" : 
      [ 	
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Produção",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        }
      ],
      "lastOccurrence" : new Date(),
      "level": "Warning"
      },
	  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Error"
  },
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Error"
  },
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Debug"
  },
  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Error"
  },
  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Debug"
  },
  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Error"
  },
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Warning"
  },
  
	  {
  "id"  : null,
  "title" : "404 Not Found",
  "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
  "origin" : "192.168.0.2",
  "occurrences" : 
  [ 	
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Teste",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Produção",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	},
	{
	  "id" : null,
	  "idLog" : null,
	  "dtCreated" : new Date(),
	  "environment" : "Desenvolvimento",
	  "user" : {
			"name": "Neemias Souza",
			"email": "neesspro@gmail.com",
			"token": "gwam4fuu5zcmxcchc44ac9r3e",
			"password" : "password"
		   },
	  "status" : "Active"
	}
  ],
  "lastOccurrence" : new Date(),
  "level": "Debug"
  },
	  {
      "id"  : null,
      "title" : "404 Not Found",
      "description" : "An unhandled exception occurred : Port 4200 is already in use. Use --port to specify a different port.",
      "origin" : "192.168.0.2",
      "occurrences" : 
      [ 	
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Teste",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Produção",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        },
        {
          "id" : null,
          "idLog" : null,
          "dtCreated" : new Date(),
          "environment" : "Desenvolvimento",
          "user" : {
                "name": "Neemias Souza",
                "email": "neesspro@gmail.com",
                "token": "gwam4fuu5zcmxcchc44ac9r3e",
                "password" : "password"
               },
          "status" : "Active"
        }
      ],
      "lastOccurrence" : new Date(),
      "level": "Warning"
      }



  ];
  closeResult = '';

  open(log) {

    localStorage.setItem("selectedLog", JSON.stringify(log))

    let modalConfig = new NgbModalConfig(); 
    modalConfig.centered = true;

    const modalRef = this.modalService.open(LogModalComponent, modalConfig);
    modalRef.componentInstance.name = 'World';
  }

}
