import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  borrarUsuario(id: number): void {
    this.usuarioService.borrarUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);});
      window.location.reload();
  }
  irAInsertarUsuario(): void {
    this.router.navigate(['/insertar-usuarios']);
  }
  irAActualizarUsuario(id: number): void {
    this.router.navigate(['/actualizar-usuarios', id]);
  }
  listarUltimosUsuarios():void {
    this.router.navigate(['/usuarios-recientes'])
  }
}
