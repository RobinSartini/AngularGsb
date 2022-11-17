import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHtmlComponent } from './navbar.html.component';

describe('NavabarHtmlComponent', () => {
  let component: NavbarHtmlComponent;
  let fixture: ComponentFixture<NavbarHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
