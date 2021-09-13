import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqMfLibComponent } from './arq-mf-lib.component';

describe('ArqMfLibComponent', () => {
  let component: ArqMfLibComponent;
  let fixture: ComponentFixture<ArqMfLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArqMfLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArqMfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
