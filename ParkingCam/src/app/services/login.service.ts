import { Observable } from 'rxjs';
import { LoginI } from 'src/app/services/modelo/login.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseI } from './modelo/response.interface';
import { LoginUsuario } from './class/login';

const API_URL = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI):Observable<ResponseI>{

    let direccion = this.URL + "create";
    return this.http.post<ResponseI>(direccion, form);
  }

  public getCurrentUser(form: LoginUsuario){
    let direccion2 = this.URL + "singin";

    return this.http.post(direccion2, form);
  }

  //Ohter
  public singIn(cedula: any, password: any){

    return this.http.get(API_URL+'/singin/'+cedula+'/'+password);
  }
}
