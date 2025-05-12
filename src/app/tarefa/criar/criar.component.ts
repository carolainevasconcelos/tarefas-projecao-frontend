import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
})
export class CriarTarefaComponent implements OnInit {
  postTarefaForm!: FormGroup;

  constructor(private tarefaService: TarefaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postTarefaForm = this.fb.group({
      titulo: [null, Validators.required],
      descricao: [null, Validators.required],
      prazo: [null, Validators.required],
      status: [null, Validators.required],
      usuario_id: [null, Validators.required],
      disciplina_id: [null, Validators.required]
    });
  }

  criarTarefa() {
    console.log(this.postTarefaForm.value);
    this.tarefaService.addTarefa(this.postTarefaForm.value).subscribe(res => {
      console.log(res);
    });
  }
}