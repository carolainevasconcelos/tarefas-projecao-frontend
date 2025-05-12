import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarCursoComponent implements OnInit {
  id!: number;
  formCurso!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.formCurso = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    });

    this.getCursoById();
  }

  getCursoById(): void {
    this.cursoService.getCursoById(this.id).subscribe((res: any) => {
      this.formCurso.patchValue(res);
    });
  }

  updateCurso(): void {
    this.cursoService.updateCurso(this.id, this.formCurso.value).subscribe((res: any) => {
      console.log(res);
      if (res && res.id != null) {
        this.router.navigateByUrl('/curso/listar');  
      }
    });
  }
}
