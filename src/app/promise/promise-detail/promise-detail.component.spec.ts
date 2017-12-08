import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseDetailComponent } from './promise-detail.component';

describe('PromiseDetailComponent', () => {
  let component: PromiseDetailComponent;
  let fixture: ComponentFixture<PromiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
