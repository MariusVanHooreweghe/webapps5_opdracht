import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Promise } from '../promise.model';
import { PromiseDataService } from '../promise-data.service';
import { Promisee } from '../promisee/promisee.model';
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  @Input() public promise: Promise;
  @Output() public toDeletePromise = new EventEmitter<Promise>();
  public promisees: Promisee[];  
  constructor(private _promiseDataService : PromiseDataService) { 
  }

  ngOnInit() {
  }
  deletePromise(){
    if (confirm("Are you sure you wish to delete this promise?"))
    this.toDeletePromise.emit(this.promise);
  }
}
