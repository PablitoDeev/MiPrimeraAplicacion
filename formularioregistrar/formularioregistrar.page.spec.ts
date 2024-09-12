import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioregistrarPage } from './formularioregistrar.page';

describe('FormularioregistrarPage', () => {
  let component: FormularioregistrarPage;
  let fixture: ComponentFixture<FormularioregistrarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioregistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
