import { Component, OnInit } from '@angular/core';
import { Promise } from '../promise.model';
import { Promisee } from '../promisee/promisee.model';
import { ActivatedRoute } from '@angular/router';
import { PromiseDataService } from '../promise-data.service'
import { FormGroup, FormControl, FormBuilder, Validators, FormArray  } from '@angular/forms'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
@Component({
  selector: 'app-promise-detail',
  templateUrl: './promise-detail.component.html',
  styleUrls: ['./promise-detail.component.css']
})
export class PromiseDetailComponent implements OnInit {
  private _promise: Promise;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private _promiseDataService: PromiseDataService) { }
  public promiseFG: FormGroup;

  ngOnInit() {
    this.route.data.subscribe(item => 
      this._promise = item['promise']);
    this.promiseFG = this.fb.group({
      name: this.fb.control(this._promise.name, [Validators.required]),
      description: this.fb.control(this._promise.description, [Validators.required, Validators.minLength(4)]),
      promiseesFA: this.fb.array([])
    });
    for (const promisee of this.promise.promisees){
      if (promisee.name != undefined){
        this.promiseesFA.push(this.fb.group({
          name: this.fb.control(promisee.name, Validators.required)
        }));
      }
    }
  }
  get promise() : Promise {
    return this._promise;
  }
  addPromiseeField(){
    if (this.promiseesFA.length < this._promise.promisees.length){
      let promiseeName = this._promise.promisees[this.promiseesFA.length].name;
      if (promiseeName != undefined){
        this.promiseesFA.push(this.fb.group({
          name: this.fb.control(promiseeName, Validators.required)
        }));
      }
    } else {
      this.promiseesFA.push(this.createPromiseesFA());      
    }
  }
  removePromiseeField(){
    if (this.promiseesFA.length != 1)
    this.promiseesFA.removeAt(this.promiseesFA.length-1);
  }
/*   onSubmit() {
    this.promise.description = this.promiseFG.value.description;
    this.promise.name = this.promiseFG.value.name;
    this.promise.promisees = this.promise.promisees.filter(promee => this.promiseesFA.value.map(item => item.name).filter(item => this.promise.promisees.map(prom => prom.name).includes(item)).includes(promee.name));
    let addedPromisees = [];
    let newPromisee : Promisee;
    for (const promiseeName of this.promiseesFA.value.map(item => item.name).filter(item => !this.promise.promisees.map(prom => prom.name).includes(item))) {
      if (promiseeName != undefined)
        newPromisee = new Promisee(promiseeName);
        addedPromisees.push(newPromisee);
        this.promise.promisees.push(newPromisee);
    }
    console.log(this.promise.toJSON());
     this._promiseDataService.savePromise(this.promise).subscribe(item => {
      const promisee = this.promise.promisees.map(p => this._promiseDataService.addPromiseeToPromise(p, item));
      Observable.forkJoin(...promisee).subscribe( 
        (promisees: Promisee[]) => {
          for (const u of promisees) {
            item.addPromisee(u);
          }
          return item;
        });
      }
    );
    //alert(`Promise ${this.promiseFG.value.description} made.`);    
    //this.promiseFG.reset();  
  } */
  createPromiseesFA(): FormGroup {
    return this.fb.group({
      name: this.fb.control(null, Validators.required)
    });
  }
  get promiseesFA(): FormArray {
    return <FormArray>this.promiseFG.get('promiseesFA');
  }
}
