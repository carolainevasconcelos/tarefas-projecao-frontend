import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-gerenciamento-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './gerenciamento-usuario.component.html',
  styleUrls: ['./gerenciamento-usuario.component.css']
})
export class GerenciamentoUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}