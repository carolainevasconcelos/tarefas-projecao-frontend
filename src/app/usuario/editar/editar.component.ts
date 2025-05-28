import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id!: number;
  formUsuario!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.formUsuario = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: [''],
      email: ['', [Validators.required, Validators.email]],
      tipo_usuario: ['', Validators.required]
    });

    this.getUsuarioById();
  }

  getUsuarioById(): void {
    // CORRIGIDO: Chamando 'getUsuarioById' (singular) como declarado no serviço
    this.usuarioService.getUsuarioById(this.id).subscribe((res: any) => {
      this.formUsuario.patchValue(res);
    });
  }

  updateUsuario(): void {
    this.usuarioService.updateUsuario(this.id, this.formUsuario.value).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.router.navigateByUrl('/usuario/listar');
      }
    });
  }
}