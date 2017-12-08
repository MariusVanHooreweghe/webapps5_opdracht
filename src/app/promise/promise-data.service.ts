import { Injectable } from '@angular/core';
import { Promise } from './promise.model';
import { Promisee } from './promisee/promisee.model';
import { PromiseBundle } from './promisebundle.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../user/authentication.service';
import 'rxjs/add/operator/map';
@Injectable()
export class PromiseDataService {
  private _appUrl = '/API';
  private _promises = new Array<Promise>();
  constructor(private http: Http, private auth: AuthenticationService) {
  }
  get promiseBundleID() : string {
    return JSON.parse(localStorage.getItem('currentUser')).promiseBundle;
  }
  get promises(): Observable<Promise[]> {//deprecated since no one will get all the promises
      return this.http.get(`${this._appUrl}/promises`, 
        { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
        .map(response => response.json().map(item => Promise.fromJSON(item)));
  }
  get promisesByUser(): Observable<PromiseBundle[]> {
      return this.http.get(`${this._appUrl}/promisebundles/${this.promiseBundleID}/promises`, 
      { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(response => {
        return response.json().map(item => PromiseBundle.fromJSON(item));
      });
  }
  getPromiseBundle() : Observable<PromiseBundle>{
    return this.http.get(`${this._appUrl}/promisebundle/${this.promiseBundleID}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response => response.json()).map(item => PromiseBundle.fromJSON(item));
    
  }
  getPromise(id) : Observable<Promise> {
    return this.http.get(`${this._appUrl}/promise/${id}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response => response.json()).map(item => Promise.fromJSON(item));
  }


  addPromiseeToPromise(promisee: Promisee, promise: Promise): Observable<Promisee>{
    const theUrl = `${this._appUrl}/promise/${promise.id}`;
    return this.http.post(`${theUrl}/promisees`, promisee)
    .map(res => res.json())
    .map(item => Promisee.fromJSON(item)); 
  }
  addNewPromise(prom): Observable<Promise> {
    const theUrl = `${this._appUrl}/promisebundles/${this.promiseBundleID}/promises`
    return this.http.post(theUrl, prom, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item =>
        Promise.fromJSON(item)
      );
  }
  removePromise(prom) : Observable<PromiseBundle> {
    return this.http.delete(`${this._appUrl}/promisebundle/${this.promiseBundleID}/promise/${prom._id}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(res => res.json()).map(item => PromiseBundle.fromJSON(item));
  }
}
