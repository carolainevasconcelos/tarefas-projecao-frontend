import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private apiUrl = 'http://localhost:8080/tarefa'; 

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTarefaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTarefa(tarefa: any): Observable<any> {
    return this.http.post(this.apiUrl, tarefa);
  }

  updateTarefa(id: number, tarefa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tarefa);
  }

  deleteTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}