import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-listar-curso',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarCursoComponent implements OnInit {
  cursos: any[] = []; 

  constructor(private cursoService: CursoService, private router: Router) {}

  ngOnInit(): void {
    this.listarCurso();
  }

  listarCurso(): void {
    this.cursoService.getCursos().subscribe((res) => {
      console.log(res);
      this.cursos = res; 
    });
  }

  atualizarCurso(id: number): void {
    console.log('Atualizando curso com ID:', id);
    this.router.navigate([`/curso/editar/${id}`]); 
  }

  deletarCurso(id: number): void {
    this.cursoService.deleteCurso(id).subscribe((res) => {
      console.log(res);
      this.listarCurso();
    });
  }
}
