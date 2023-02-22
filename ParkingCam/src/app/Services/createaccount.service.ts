import { Injectable } from '@angular/core';
import { Registro } from './class/Usuarios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const urlEndPoint = 'http://localhost:8080/apiss';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CreateAccountService {

  //private urlEndPoint:string = 'http://localhost:8080/api/auth';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  public createUser(nuevoUsuario: Registro): Observable<Registro> {
    return this.http.post<Registro>(urlEndPoint + '/signup', nuevoUsuario);  
  }
  
  login(correo: any, contrasenia: any) {
    return this.http.get(
      urlEndPoint + '/usu/'+correo+'/'+contrasenia,
    )
  }

 // logout(): Observable<any> {
  //  return this.http.post(urlEndPoint + '/signout', { }, httpOptions);
  //}
  
}