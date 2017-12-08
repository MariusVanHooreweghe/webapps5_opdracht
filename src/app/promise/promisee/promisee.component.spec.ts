import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseeComponent } from './promisee.component';

describe('PromiseeComponent', () => {
  let component: PromiseeComponent;
  let fixture: ComponentFixture<PromiseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
