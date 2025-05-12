import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-listar',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  usuarios: any[] = []; 

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.listarUsuario();
  }

  listarUsuario(): void {
    this.usuarioService.getUsuarios().subscribe((res) => {
      console.log(res);
      this.usuarios = res;
    });
  }

  atualizarUsuario(id: number): void {
    console.log('Atualizando usuário com ID:', id);
    this.router.navigate([`/usuario/editar/${id}`]);
  }

  deletarUsuario(id: number){
    this.usuarioService.deleteUsuario(id).subscribe((res) => {
      console.log(res);
    });
  }
}
