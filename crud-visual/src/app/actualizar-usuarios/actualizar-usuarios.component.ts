import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuarios.component.html',
  styleUrls: ['./actualizar-usuarios.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  usuario: Usuario = { id: 0, nombre: '' };
  private formatoNombre = /^[a-zA-Z ]+$/

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.getUsuario(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  actualizarUsuario(): void {
    if (!this.usuario.nombre || !this.usuario.nombre.match(this.formatoNombre)) {
      alert('Error: El nombre debe de tener al menos un carácter y no contener números ni caracteres especiales');
      return;
    }
    this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(response => {
      console.log(response);
    });
  }
  irAListarUsuarios(): void {
    this.router.navigate(['/listar-usuarios']);
  }
}
