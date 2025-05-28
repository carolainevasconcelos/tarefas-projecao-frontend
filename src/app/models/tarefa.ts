export interface Tarefa {
  id?: number; 
  titulo: string;
  descricao: string;
  prazo: string; 
  status: string;
  usuarioId?: number; 
  disciplinaId?: number;
}