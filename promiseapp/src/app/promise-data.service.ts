import { Injectable } from '@angular/core';
import { Promise } from './promise/promise.model';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class PromiseDataService {
  //private _appUrl = 'http://localhost:4200/API/recipes/';
  private _promises = new Array<Promise>();
  constructor(/*private http: Http*/) {
    let promise1 = new Promise("Kamer opruimen");
    let promise2 = new Promise("Lichtje teruggeven");
    promise1.addUser("Thibault");
    promise2.addUser("Merjus");
    this.promises.push(promise1);
    this.promises.push(promise2);
  }
  get promises() : Promise[] {
    /*return this.http.get(this._appUrl).map(response =>
      response.json().map(item => 
        new Promise(item.description, item.name, item.userIDs)
      )
    );*/
    return this._promises;
  }
  newPromiseAdded(promise){
    this._promises.push(promise);
  }
}
