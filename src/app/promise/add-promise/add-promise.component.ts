import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Promise } from '../promise.model';
import { Promisee } from '../promisee/promisee.model';
import { PromiseDataService } from '../promise-data.service';

import { Observable } from 'rxjs/Rx';

import { FormGroup, FormControl, FormBuilder, Validators, FormArray  } from '@angular/forms'
@Component({
  selector: 'app-add-promise',
  templateUrl: './add-promise.component.html',
  styleUrls: ['./add-promise.component.css']
})
export class AddPromiseComponent implements OnInit {
  public promise: FormGroup;
  constructor(private fb: FormBuilder, private _promiseDataService: PromiseDataService) { }

  ngOnInit() {
    this.promise = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      description: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      promisees: this.fb.array([this.createPromisees()])
    });

  }
  addPromiseeField(){
    this.promisees.push(this.createPromisees());
  }
  removePromiseeField(){
    if (this.promisees.length != 1)
    this.promisees.removeAt(this.promisees.length-1);
  }
  onSubmit() {
    const addedPromise = new Promise(this.promise.value.description, this.promise.value.name);
    for (const promisee of this.promise.value.promisees){
      if (promisee.name != undefined)
      addedPromise.addPromisee(new Promisee(promisee.name));
    }
    this._promiseDataService.addNewPromise(addedPromise).subscribe(item => {
        const promisee = addedPromise.promisees.map(p => this._promiseDataService.addPromiseeToPromise(p, item));
        Observable.forkJoin(...promisee).subscribe( 
          (promisees: Promisee[]) => {
            for (const u of promisees) {
              item.addPromisee(u);
            }
            //return this.promises.push(item)
            return item;
        });
      }
    );
    alert(`Promise ${this.promise.value.name} made.`);    
    this.promise.reset();  
  }
  createPromisees(): FormGroup {
    return this.fb.group({
      name: this.fb.control(null, Validators.required)
    });
  }
  get promisees(): FormArray {
    return <FormArray>this.promise.get('promisees');
  }

}
