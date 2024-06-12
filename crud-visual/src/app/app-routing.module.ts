import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { InsertarUsuarioComponent } from './insertar-usuarios/insertar-usuarios.component';
import { ActualizarUsuarioComponent } from './actualizar-usuarios/actualizar-usuarios.component';
import { UsuariosRecientesComponent } from './usuarios-recientes/usuarios-recientes.component';

const routes: Routes = [
  { path: 'listar-usuarios', component: ListarUsuariosComponent },
  { path: 'insertar-usuarios', component: InsertarUsuarioComponent },
  { path: 'actualizar-usuarios/:id', component: ActualizarUsuarioComponent },
  { path: 'usuarios-recientes', component: UsuariosRecientesComponent },
  { path: '', redirectTo: '/listar-usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
