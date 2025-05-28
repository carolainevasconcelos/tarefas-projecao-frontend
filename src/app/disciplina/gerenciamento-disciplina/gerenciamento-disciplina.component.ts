import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gerenciamento-disciplina',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gerenciamento-disciplina.component.html',
  styleUrls: ['./gerenciamento-disciplina.component.css']
})
export class GerenciamentoDisciplinaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}