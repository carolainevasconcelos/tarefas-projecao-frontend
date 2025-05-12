import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../../services/disciplina.service';

@Component({
  selector: 'app-editar-disciplina',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarDisciplinaComponent implements OnInit {
  id!: number;
  formDisciplina!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private disciplinaService: DisciplinaService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.formDisciplina = this.fb.group({
      nome: ['', Validators.required],
      professor_nome: ['', Validators.required],
      horario: ['', Validators.required],
      curso_id: ['', Validators.required]
    });

    this.getDisciplinaById();
  }

  getDisciplinaById(): void {
    this.disciplinaService.getDisciplinaById(this.id).subscribe((res: any) => {
      this.formDisciplina.patchValue(res);
    });
  }

  updateDisciplina(): void {
    this.disciplinaService.updateDisciplina(this.id, this.formDisciplina.value).subscribe((res: any) => {
      console.log(res);
      if (res && res.id != null) {
        this.router.navigateByUrl('/disciplina/listar');
      }
    });
  }
}
