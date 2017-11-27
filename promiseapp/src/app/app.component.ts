import { Component } from '@angular/core';
import { Promise } from './promise/promise.model';
import { PromiseDataService } from './promise-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PromiseDataService]
})
export class AppComponent {
  public promises: Promise[];
  constructor(private _promiseDataService : PromiseDataService){
    this.promises = this._promiseDataService.promises;
  }
  newPromiseAdded(promise){
    this._promiseDataService.newPromiseAdded(promise);
  }
}
