import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoCursoComponent } from './gerenciamento-curso.component';

describe('GerenciamentoCursoComponent', () => {
  let component: GerenciamentoCursoComponent;
  let fixture: ComponentFixture<GerenciamentoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
