import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsuccessfulRegistrationComponent } from './unsuccessful-registration.component';

describe('UnsuccessfulRegistrationComponent', () => {
  let component: UnsuccessfulRegistrationComponent;
  let fixture: ComponentFixture<UnsuccessfulRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsuccessfulRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsuccessfulRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
