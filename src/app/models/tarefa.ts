export interface Tarefa {
  id?: number;
  titulo: string;
  descricao: string; 
  prazo: string;
  status: string;   
  usuario_id?: number;        
  disciplina_id?: number;
}