import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-tarefa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarTarefaComponent implements OnInit {
  tarefas: any[] = [];

  constructor(private tarefaService: TarefaService, private router: Router) {}

  ngOnInit(): void {
    this.listarTarefas();
  }

  listarTarefas(): void {
    this.tarefaService.getTarefas().subscribe((res) => {
      console.log(res);
      this.tarefas = res;
    });
  }

  atualizarTarefa(id: number): void {
    this.router.navigate([`/tarefa/editar/${id}`]);
  }

  deletarTarefa(id: number): void {
    this.tarefaService.deleteTarefa(id).subscribe((res) => {
      console.log(res);
      this.listarTarefas();
    });
  }
}