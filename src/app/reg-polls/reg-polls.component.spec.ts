/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegPollsComponent } from './reg-polls.component';

describe('RegPollsComponent', () => {
  let component: RegPollsComponent;
  let fixture: ComponentFixture<RegPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
