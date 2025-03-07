import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
    apiUrl: String = "http://localhost:3000/api"

    getUser() {
        return this.http.get(`${this.apiUrl}/users`)
    }

    createUser (body:any) {
        return this.http.post(`${this.apiUrl}/user`, body)
    }

    login(body:any) {
        return this.http.post(`${this.apiUrl}/`, body)
    }

}
