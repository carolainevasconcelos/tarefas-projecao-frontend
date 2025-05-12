import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso.service'; 

@Component({
  selector: 'app-criar-curso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
})
export class CriarCursoComponent implements OnInit {
  postCursoForm!: FormGroup;

  constructor(private cursoService: CursoService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postCursoForm = this.fb.group({
      nome: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
    });
  }

  criarCurso() {
    console.log(this.postCursoForm.value);
    this.cursoService.addCurso(this.postCursoForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
