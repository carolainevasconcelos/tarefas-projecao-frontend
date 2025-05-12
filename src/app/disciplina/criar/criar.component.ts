import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DisciplinaService } from '../../services/disciplina.service';

@Component({
  selector: 'app-criar-disciplina',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
})
export class CriarDisciplinaComponent implements OnInit {
  postDisciplinaForm!: FormGroup;

  constructor(private disciplinaService: DisciplinaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postDisciplinaForm = this.fb.group({
      nome: [null, Validators.required],
      professor_nome: [null, Validators.required],
      horario: [null, Validators.required],
      curso_id: [null, Validators.required]
    });
  }

  criarDisciplina() {
    console.log(this.postDisciplinaForm.value);
    this.disciplinaService.addDisciplina(this.postDisciplinaForm.value).subscribe(res => {
      console.log(res);
    });
  }
}