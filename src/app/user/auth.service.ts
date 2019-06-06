import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {

  }

  loginUser(userName: string, password: string) {

    const loginInfo = {
      username: userName,
      password
    }

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));

    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // };
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof (Object)) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe();
  }

  logout() {

    const options = {
      headers: new HttpHeaders()
    }

    return this.http.post('/api/logout', null, options).pipe(tap(() => this.currentUser = null));
  }
}
