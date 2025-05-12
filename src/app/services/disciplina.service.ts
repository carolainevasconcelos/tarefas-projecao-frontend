import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private apiUrl = 'http://localhost:8080/disciplina/';

  constructor(private http: HttpClient) {}

  getDisciplinas() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getDisciplinaById(id: number) {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  addDisciplina(disciplina: any) {
    return this.http.post(this.apiUrl, disciplina);
  }

  updateDisciplina(disciplina: any) {
    return this.http.put(this.apiUrl, disciplina);
  }

  deleteDisciplina(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
