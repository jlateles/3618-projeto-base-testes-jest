import { CabecalhoComponent } from './cabecalho.component';
import {ComponentFixture, TestBed } from '@angular/core/testing';

describe('Componente de cabeçalho', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CabecalhoComponent],
    })
    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
  });

  it('Deve estar criado', () => {
    expect(component).toBeTruthy();
  })

  it('Deve definir as propriedades alt e src', () => {
    expect(component.alt).toBeDefined();
    expect(component.src).toBeDefined();
  })

  it('Deve renderizar o conteúdo baseado nas propriedades src e alt', () => {
    component.src = 'https://example.com/teste-image.jpg';
    component.alt = 'Imagem teste';
    expect(component).toMatchSnapshot();
  })

})
