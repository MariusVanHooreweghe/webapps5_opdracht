import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from './user/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //public promises: Promise[];
  //private _promiseDataService: PromiseDataService;
  //constructor(private _dataService : PromiseDataService){
  //  this._promiseDataService = this._dataService;
  //}
  //ngOnInit(){
  //  this._promiseDataService.promises.subscribe(items => this.promises = items);
  //}
  //newPromiseAdded(promise: Promise){
  //  this._promiseDataService.addNewPromise(promise).subscribe(item => {
  //    const promisee = promise.promisees.map(u => 
  //      this._promiseDataService.addPromiseeToPromise(u, item));
  /*    Observable.forkJoin(...promisee).subscribe( 
        (promisees: Promisee[]) => {
          for (const u of promisees) {
            item.addPromisee(u);
          }
          return this.promises.push(item)
        }); 
    });
  }*/
  constructor(private authService: AuthenticationService) {
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  ngOnInit() {
  }

}
