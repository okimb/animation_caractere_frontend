import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Appsettings} from '../../settings/app.setting';
import {User} from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Afficher tous utilisateurs
  findAllUsers() {
    return this.http.get(Appsettings.APP_URL + '/users/');
  }

  // trouver un utilisateur par ID
  findUserById(codeUser: number) {
    return this.http.get(Appsettings.APP_URL + '/users/' + codeUser);
  }

  // créer un utilisateur
  saveUser(user: User) {
    return this.http.get(Appsettings.APP_URL + '/users/');
  }

  // login
  login(mail: string, password: string) {
    const param = new HttpParams();
    param.append('mail', mail);
    param.append('password', password);
    return this.http.post(Appsettings.APP_URL + '/users/login', param);
  }
}
