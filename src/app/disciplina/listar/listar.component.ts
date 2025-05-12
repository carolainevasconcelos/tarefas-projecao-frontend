import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaService } from '../../services/disciplina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-disciplina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarDisciplinaComponent implements OnInit {
  disciplinas: any[] = [];

  constructor(private disciplinaService: DisciplinaService, private router: Router) {}

  ngOnInit(): void {
    this.listarDisciplinas();
  }

  listarDisciplinas(): void {
    this.disciplinaService.getDisciplinas().subscribe((res) => {
      console.log(res);
      this.disciplinas = res;
    });
  }

  atualizarDisciplina(id: number): void {
    this.router.navigate([`/disciplina/editar/${id}`]);
  }

  deletarDisciplina(id: number): void {
    this.disciplinaService.deleteDisciplina(id).subscribe((res) => {
      console.log(res);
      this.listarDisciplinas();
    });
  }
}
