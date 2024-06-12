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
    this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(response => {
      console.log(response);
    });
  }
  irAListarUsuarios(): void {
    this.router.navigate(['/listar-usuarios']);
  }
}

