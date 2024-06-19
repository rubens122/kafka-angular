import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarUsuariosComponent } from './listar-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../usuario.service'

describe('ListarUsuariosComponent', () => {
  let component: ListarUsuariosComponent;
  let fixture: ComponentFixture<ListarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarUsuariosComponent],
      providers: [UsuarioService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

