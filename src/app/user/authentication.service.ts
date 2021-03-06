import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private _url = '/API/users';
  private _user$: BehaviorSubject<string>;
  public redirectUrl: string;  
  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(
      currentUser && currentUser.username);
  }
  get user$(): BehaviorSubject<string> {
    return this._user$;
  }
  get token(): string {
    return JSON.parse(localStorage.getItem('currentUser')).token;
  }
 
  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, 
      { username: username.toLowerCase(), password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser', 
            JSON.stringify({ username: username, token: token, promiseBundle: res.promiseBundle }));
            this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }
  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }

  register(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/register`, { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: res.token,  promiseBundle: res.promiseBundle}));
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username: username.toLowerCase()}).map(res => {
      return res.json();
    })
    .map(item => {
      return item.username === 'alreadyexists';
    });
  }
}
