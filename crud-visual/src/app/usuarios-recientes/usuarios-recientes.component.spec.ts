import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosRecientesComponent } from './usuarios-recientes.component';

describe('UsuariosRecientesComponent', () => {
  let component: UsuariosRecientesComponent;
  let fixture: ComponentFixture<UsuariosRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosRecientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
