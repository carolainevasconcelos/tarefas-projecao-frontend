import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/usuario/';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<any[]>(this.apiUrl);
  }

  addUsuario(usuario: any) {
    return this.http.post(this.apiUrl, usuario);
  }

  updateUsuario(usuario: any) {
    return this.http.put(this.apiUrl, usuario); // ✅ Corrigido
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
