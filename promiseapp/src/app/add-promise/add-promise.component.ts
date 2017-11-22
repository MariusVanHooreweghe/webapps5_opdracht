import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Promise } from '../promise/promise.model';
@Component({
  selector: 'app-add-promise',
  templateUrl: './add-promise.component.html',
  styleUrls: ['./add-promise.component.css']
})
export class AddPromiseComponent implements OnInit {
  @Output() public newPromise = new EventEmitter<Promise>();
  constructor() { }

  ngOnInit() {
  }
  
  makePromise(newPromiseDescription: HTMLInputElement) : boolean {
    let promise = new Promise(newPromiseDescription.value);
    console.log(newPromiseDescription.value);
    this.newPromise.emit(promise);
    return false;
  }
}
