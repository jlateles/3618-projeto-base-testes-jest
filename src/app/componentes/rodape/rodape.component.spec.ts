import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RodapeComponent } from "./rodape.component"

describe('Componente do rodapé', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [RodapeComponent],
    })
    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
  })

  it('Deve estar criado', () => {
    expect(component).toBeTruthy();
  })

  it('Deve definir as propriedades alt e src', () => {
    expect(component.alt).toBeDefined();
    expect(component.src).toBeDefined();
  })

  it('tem que renderizar o conteúdo baseado nas propriedades src e alt', () => {
    component.src = 'https://example.com/test-image.jpg';
    component.alt = 'Imagem teste';
    expect(component).toMatchSnapshot();
  });

})
