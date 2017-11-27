import { Component, OnInit, Input } from '@angular/core';
import { Promise } from './promise.model';
import { User } from '../user/user.model';
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  @Input() public promise: Promise;
  public users: User[];  
  constructor() { 
  }

  ngOnInit() {
  }

}
