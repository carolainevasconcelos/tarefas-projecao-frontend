import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = 'http://localhost:8080/tarefa/';

  constructor(private http: HttpClient) {}

  getTarefas() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTarefaById(id: number) {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  addTarefa(tarefa: any) {
    return this.http.post(this.apiUrl, tarefa);
  }

  updateTarefa(tarefa: any) {
    return this.http.put(this.apiUrl, tarefa);
  }

  deleteTarefa(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
