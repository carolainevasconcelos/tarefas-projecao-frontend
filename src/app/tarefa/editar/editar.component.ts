import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-editar-tarefa',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule, RouterModule], 
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarTarefaComponent implements OnInit {
  id!: number;
  formTarefa!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tarefaService: TarefaService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.formTarefa = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      prazo: ['', Validators.required],
      status: ['', Validators.required],
      usuario_id: ['', Validators.required],
      disciplina_id: ['', Validators.required]
    });

    this.getTarefaById();
  }

  getTarefaById(): void {
    this.tarefaService.getTarefaById(this.id).subscribe((res: any) => {
      this.formTarefa.patchValue(res);
    });
  }

  updateTarefa(): void {
    this.tarefaService.updateTarefa(this.id, this.formTarefa.value).subscribe((res: any) => {
      console.log(res);
      if (res) { 
        this.router.navigateByUrl('/tarefa/listar');
      }
    });
  }
}