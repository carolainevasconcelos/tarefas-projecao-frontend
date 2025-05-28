import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css'],
})
export class CriarComponent implements OnInit {
  postUsuarioForm!: FormGroup;

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postUsuarioForm = this.fb.group({
      nome: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      tipo_usuario: [null, Validators.required] 
    });
  }

  criarUsuario(){
    console.log(this.postUsuarioForm.value);
    this.usuarioService.addUsuario(this.postUsuarioForm.value).subscribe((res)=>{ 
      console.log(res);
    })
  }

}