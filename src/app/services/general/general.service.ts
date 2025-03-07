import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http : HttpClient) { }

  loged():boolean{
    const logueado = sessionStorage.getItem('token')
    // if (logueado) {
    //     this.http.
    // }
    return true
  }
}
