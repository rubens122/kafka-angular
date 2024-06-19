import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUsuarioComponent } from './actualizar-usuarios.component';
import { HttpClientModule } from '@angular/common/http';

describe('ActualizarUsuariocomponent', () => {
  let component: ActualizarUsuarioComponent;
  let fixture: ComponentFixture<ActualizarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ActualizarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
