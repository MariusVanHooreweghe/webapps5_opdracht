import { Component, OnInit } from '@angular/core';
import { Promise } from '../promise.model';
import { Promisee } from '../promisee/promisee.model';
import { PromiseDataService } from '../promise-data.service';
@Component({
  selector: 'app-promise-list',
  templateUrl: './promise-list.component.html',
  styleUrls: ['./promise-list.component.css']
})
export class PromiseListComponent implements OnInit {
  public promises: Promise[];
  constructor(private _promiseDataService: PromiseDataService) { 
  }

  ngOnInit() {
    this._promiseDataService.getPromiseBundle().subscribe(item => this.promises = item.promises);
  }
  removePromise(promise) {
    this._promiseDataService.removePromise(promise).subscribe(item => this.promises = item.promises);
  }

}
