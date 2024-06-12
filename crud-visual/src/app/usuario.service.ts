import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario} from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private crudUrl = 'http://localhost:8082/usuarios';
  private consumidorUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.crudUrl}/listar`);
  }
  getUsuarioCola(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.consumidorUrl}/usuarios`)
  }
  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.crudUrl}/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<string> {
    return this.http.post<string>(`${this.crudUrl}/insertar`, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<string> {
    return this.http.put<string>(`${this.crudUrl}/actualizar/${id}`, usuario);
  }

  borrarUsuario(id: number): Observable<string> {
    return this.http.delete<string>(`${this.crudUrl}/borrar/${id}`);
  }
}

