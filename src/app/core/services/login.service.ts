import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly apiURL = 'https://hcs.dev4.com.br/api/login/login';

  constructor(private http: HttpClient) {}

  postLogin(login) {
    return this.http.post(`${this.apiURL}`, login);
  }

  getUser() {
    let user;
    if (localStorage.getItem('user')) {
      user = JSON.parse(sessionStorage.getItem('user'));
    } else {
      user = JSON.parse(sessionStorage.getItem('user'));
    }
    return user;
  }
}
