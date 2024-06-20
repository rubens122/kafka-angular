import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuarios.component.html',
  styleUrls: ['./insertar-usuarios.component.css']
})
export class InsertarUsuarioComponent {

  usuario: Usuario = { id: 0, nombre: '' };
  private formatoNombre = /^[a-zA-Z ]+$/

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  crearUsuario(): void {
    if (this.usuario.id <= 0) {
      alert('Error: El ID debe ser mayor que 0');
      return;
    }
    if (!this.usuario.nombre || !this.usuario.nombre.match(this.formatoNombre)) {
      alert('Error: El nombre debe de tener al menos un carácter y no contener números ni caracteres especiales');
      return;
    }
    this.usuarioService.crearUsuario(this.usuario).subscribe(response => {
      console.log('Usuario insertado correctamente', response);
      this.usuario = { id:0, nombre: '' };
    });
  }
  irAListarUsuarios(): void {
    this.router.navigate(['/listar-usuarios']);
  }
}


