import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private apiUrl = 'http://localhost:8080/disciplina';

  constructor(private http: HttpClient) {}

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDisciplinaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addDisciplina(disciplina: any): Observable<any> {
    return this.http.post(this.apiUrl, disciplina);
  }

  updateDisciplina(id: number, disciplina: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, disciplina);
  }

  deleteDisciplina(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
