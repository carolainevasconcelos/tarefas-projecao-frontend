import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Usuário
import { CriarComponent as CriarUsuario } from './usuario/criar/criar.component';
import { ListarComponent as ListarUsuario } from './usuario/listar/listar.component';
import { EditarComponent as EditarUsuario } from './usuario/editar/editar.component';
import { GerenciamentoUsuarioComponent } from './usuario/gerenciamento-usuario/gerenciamento-usuario.component'; 

// Curso
import { CriarCursoComponent } from './curso/criar/criar.component';
import { ListarCursoComponent } from './curso/listar/listar.component';
import { EditarCursoComponent } from './curso/editar/editar.component';
import { GerenciamentoCursoComponent } from './curso/gerenciamento-curso/gerenciamento-curso.component'; 

// Disciplina
import { CriarDisciplinaComponent } from './disciplina/criar/criar.component';
import { ListarDisciplinaComponent } from './disciplina/listar/listar.component';
import { EditarDisciplinaComponent } from './disciplina/editar/editar.component';
import { GerenciamentoDisciplinaComponent } from './disciplina/gerenciamento-disciplina/gerenciamento-disciplina.component'; 

// Tarefa
import { CriarTarefaComponent } from './tarefa/criar/criar.component';
import { ListarTarefaComponent } from './tarefa/listar/listar.component';
import { EditarTarefaComponent } from './tarefa/editar/editar.component';
import { GerenciamentoTarefaComponent } from './tarefa/gerenciamento-tarefa/gerenciamento-tarefa.component'; 


export const routes: Routes = [
  // Rota padrão para HomeComponent
  { path: '', component: HomeComponent },

  // Rotas de Usuário 
  { path: 'usuario', component: GerenciamentoUsuarioComponent }, 
  { path: 'usuario/cadastrar', component: CriarUsuario },
  { path: 'usuario/listar', component: ListarUsuario },
  { path: 'usuario/editar/:id', component: EditarUsuario },

  // Rotas de Curso 
  { path: 'curso', component: GerenciamentoCursoComponent },
  { path: 'curso/cadastrar', component: CriarCursoComponent },
  { path: 'curso/listar', component: ListarCursoComponent },
  { path: 'curso/editar/:id', component: EditarCursoComponent },

  // Rotas de Disciplina
  { path: 'disciplina', component: GerenciamentoDisciplinaComponent },
  { path: 'disciplina/cadastrar', component: CriarDisciplinaComponent },
  { path: 'disciplina/listar', component: ListarDisciplinaComponent },
  { path: 'disciplina/editar/:id', component: EditarDisciplinaComponent },

  // Rotas de Tarefa
  { path: 'tarefa', component: GerenciamentoTarefaComponent },
  { path: 'tarefa/cadastrar', component: CriarTarefaComponent },
  { path: 'tarefa/listar', component: ListarTarefaComponent },
  { path: 'tarefa/editar/:id', component: EditarTarefaComponent },
];