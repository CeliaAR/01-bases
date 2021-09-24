import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetaQueQuieroCrearComponent } from './carpeta-que-quiero-crear.component';

describe('CarpetaQueQuieroCrearComponent', () => {
  let component: CarpetaQueQuieroCrearComponent;
  let fixture: ComponentFixture<CarpetaQueQuieroCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpetaQueQuieroCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetaQueQuieroCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
