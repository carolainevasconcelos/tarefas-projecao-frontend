import { Routes } from '@angular/router';

// Usuário
import { CriarComponent as CriarUsuario } from './usuario/criar/criar.component';
import { ListarComponent as ListarUsuario } from './usuario/listar/listar.component';
import { EditarComponent as EditarUsuario } from './usuario/editar/editar.component';

// Curso
import { CriarCursoComponent } from './curso/criar/criar.component'; 
import { ListarCursoComponent } from './curso/listar/listar.component'; 
import { EditarCursoComponent } from './curso/editar/editar.component'; 

// Disciplina
import { CriarDisciplinaComponent } from './disciplina/criar/criar.component';
import { ListarDisciplinaComponent } from './disciplina/listar/listar.component';
import { EditarDisciplinaComponent } from './disciplina/editar/editar.component';

// Tarefa
import { CriarTarefaComponent } from './tarefa/criar/criar.component';
import { ListarTarefaComponent } from './tarefa/listar/listar.component';
import { EditarTarefaComponent } from './tarefa/editar/editar.component';

export const routes: Routes = [
  // Usuário
  { path: 'usuario/cadastrar', component: CriarUsuario },
  { path: 'usuario/listar', component: ListarUsuario },
  { path: 'usuario/editar/:id', component: EditarUsuario },

  // Curso
  { path: 'curso/cadastrar', component: CriarCursoComponent }, 
  { path: 'curso/listar', component: ListarCursoComponent }, 
  { path: 'curso/editar/:id', component: EditarCursoComponent },

  // Disciplina
  { path: 'disciplina/cadastrar', component: CriarDisciplinaComponent },
  { path: 'disciplina/listar', component: ListarDisciplinaComponent },
  { path: 'disciplina/editar/:id', component: EditarDisciplinaComponent },

  // Tarefa
  { path: 'tarefa/cadastrar', component: CriarTarefaComponent },
  { path: 'tarefa/listar', component: ListarTarefaComponent },
  { path: 'tarefa/editar/:id', component: EditarTarefaComponent },

  { path: '', pathMatch: 'full', redirectTo: 'outra-rota' },
];