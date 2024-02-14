import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/';
  }

  public todosLosUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"allUsers");

  }
  añadirUsuario(nombre: string, correo: string, password: string) {
    const params = new HttpParams()
      .set('name', nombre)
      .set('email', correo)
      .set('password', password);

    return this.http.post(this.usersUrl + 'addUser', params,{"responseType":"text"});
  }

  loginUsuario(name: string, pass: string) {
    const params = new HttpParams()
      .set('name', name)
      .set('pass', pass);

    return this.http.post(this.usersUrl + 'loginUser', params,{"responseType":"text"});
  }

  getUserdata(userId: string): Observable<any> {
    return this.http.get(`http://localhost:8080/usuarios/${userId}`);
  }


}
