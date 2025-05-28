import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CursoService {
  private baseUrl: string = 'http://localhost:8080/curso'; 

  constructor(private http: HttpClient) {}

  getCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCursoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addCurso(curso: any): Observable<any> {
    return this.http.post(this.baseUrl, curso);
  }

  updateCurso(id: number, curso: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, curso);
  }

  deleteCurso(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}