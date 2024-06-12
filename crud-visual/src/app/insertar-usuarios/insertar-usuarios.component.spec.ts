import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarUsuariosComponent } from './insertar-usuarios.component';

describe('InsertarUsuariosComponent', () => {
  let component: InsertarUsuariosComponent;
  let fixture: ComponentFixture<InsertarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertarUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
