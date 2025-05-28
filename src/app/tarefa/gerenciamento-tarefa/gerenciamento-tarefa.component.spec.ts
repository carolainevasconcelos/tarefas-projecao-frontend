import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoTarefaComponent } from './gerenciamento-tarefa.component';

describe('GerenciamentoTarefaComponent', () => {
  let component: GerenciamentoTarefaComponent;
  let fixture: ComponentFixture<GerenciamentoTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoTarefaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
