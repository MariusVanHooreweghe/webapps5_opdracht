import { Component, OnInit, Input } from '@angular/core';
import { Promisee } from './promisee.model';
@Component({
  selector: 'app-promisee',
  templateUrl: './promisee.component.html',
  styleUrls: ['./promisee.component.css']
})
export class PromiseeComponent implements OnInit {
  @Input() public promisee: Promisee;
  constructor() {
  }

  ngOnInit() {
  }

}