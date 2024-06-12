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

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  crearUsuario(): void {
    this.usuarioService.crearUsuario(this.usuario).subscribe(response => {
      console.log('Usuario insertado correctamente', response);
      this.usuario = { id:0, nombre: '' };
    });
  }
  irAListarUsuarios(): void {
    this.router.navigate(['/listar-usuarios']);
  }
}


