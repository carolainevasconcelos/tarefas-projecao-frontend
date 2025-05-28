import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gerenciamento-tarefa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gerenciamento-tarefa.component.html',
  styleUrls: ['./gerenciamento-tarefa.component.css']
})
export class GerenciamentoTarefaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}