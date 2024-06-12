import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { InsertarUsuarioComponent } from './insertar-usuarios/insertar-usuarios.component';
import { ActualizarUsuarioComponent } from './actualizar-usuarios/actualizar-usuarios.component';
import { UsuariosRecientesComponent } from './usuarios-recientes/usuarios-recientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    InsertarUsuarioComponent,
    ActualizarUsuarioComponent,
    UsuariosRecientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

