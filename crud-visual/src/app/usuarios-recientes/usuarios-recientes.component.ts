import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-recientes',
  templateUrl: './usuarios-recientes.component.html',
  styleUrl: './usuarios-recientes.component.css'
})
export class UsuariosRecientesComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarioCola().subscribe(data => {
      this.usuarios = data;
    });
  }
  irAListarUsuarios(): void {
    this.router.navigate(['/listar-usuarios']);
  }
}
