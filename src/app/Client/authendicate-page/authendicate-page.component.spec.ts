import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthendicatePageComponent } from './authendicate-page.component';

describe('AuthendicatePageComponent', () => {
  let component: AuthendicatePageComponent;
  let fixture: ComponentFixture<AuthendicatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthendicatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthendicatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
