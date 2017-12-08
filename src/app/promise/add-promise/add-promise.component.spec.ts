import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromiseComponent } from './add-promise.component';

describe('AddPromiseComponent', () => {
  let component: AddPromiseComponent;
  let fixture: ComponentFixture<AddPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
