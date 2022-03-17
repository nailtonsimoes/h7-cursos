import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarModuloComponent } from './criar-modulo.component';

describe('CriarModuloComponent', () => {
  let component: CriarModuloComponent;
  let fixture: ComponentFixture<CriarModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
