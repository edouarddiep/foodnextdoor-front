import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfilComponent } from './vendor-profil.component';

describe('VendorProfilComponent', () => {
  let component: VendorProfilComponent;
  let fixture: ComponentFixture<VendorProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
