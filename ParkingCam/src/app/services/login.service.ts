import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL: string = 'http://localhost:8080/api/usuario/';

  constructor(private http: HttpClient) { }

}
