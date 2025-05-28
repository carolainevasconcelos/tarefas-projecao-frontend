import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gerenciamento-curso',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gerenciamento-curso.component.html',
  styleUrls: ['./gerenciamento-curso.component.css']
})
export class GerenciamentoCursoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}