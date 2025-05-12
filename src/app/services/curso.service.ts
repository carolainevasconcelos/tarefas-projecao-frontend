import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseUrl: string = 'http://localhost:8080/curso/'; 

  constructor(private http: HttpClient) {}

  getCursoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCurso(id: number, curso: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, curso);
  }
}
