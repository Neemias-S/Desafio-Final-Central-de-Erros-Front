import { User } from './../models/User';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class LogService {

    public user: User;

    constructor(private http: HttpClient){
        this.user = JSON.parse(localStorage.getItem("user"));
    }

    public newlog(log: any) {
          return this.http.post(
            `${environment.backendURL}/logs`,
            log,
            { headers: new HttpHeaders({ 'Authorization': this.user.token }) }
          );
      }

    public getAllLogs(ambiente : string){
      return this.http.get(`${environment.backendURL}/logs/${ambiente}`);
    }

    //Analisar segurança (Double step auth)
    public logIn(credntials: User) {
      return this.http.post(`${environment.backendURL}/auth`, credntials);
    }

    public signIn(credntials: User) {
      return this.http.post(`${environment.backendURL}/auth`, credntials);
  }

    public login({ email, password }: { email: string; password: string; }) {
      return this.http.post(`${environment.backendURL}/oauth/token`, { email, password });
    }
}
