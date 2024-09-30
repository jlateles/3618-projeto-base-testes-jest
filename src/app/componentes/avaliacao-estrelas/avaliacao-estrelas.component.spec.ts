import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AvaliacaoEstrelasComponent } from "./avaliacao-estrelas.component"
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { forwardRef } from "@angular/core";

describe('Avaliação por estrelas', () =>{
  let component: AvaliacaoEstrelasComponent;
  let fixture: ComponentFixture<AvaliacaoEstrelasComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AvaliacaoEstrelasComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
          multi: true
        }
      ]
    });

    fixture = TestBed.createComponent(AvaliacaoEstrelasComponent);
    component = fixture.componentInstance;
    component.readOnly = false;
  });

  it('O componente deve estar criado', () => {
    expect(component).toBeTruthy();
  })

  it('Deve atribuir um valor para a classificação quando o método writevalue for chamado', () => {
    const classificacao = 3;
    component.writeValue(classificacao);
    expect(component.classificacao).toBe(classificacao);
  })

  it('Deve chamar o onChange quando o método classificar for chamado', () =>{
    const onChangeSpy = jest.spyOn(component, 'onChange');
    const classificacao = 4;
    component.classificar(classificacao);
    expect(onChangeSpy).toHaveBeenCalled();

  })

  it('Deve chamar o onTouched quando o método classificar for chamado', () =>{
    const onTouchedSpy = jest.spyOn(component, 'onTouched');
    const classificacao = 4;
    component.classificar(classificacao);
    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('Não deve atualizar a classificação quando a propriedade readonly for true', () =>{
    const onChangeSpy = jest.spyOn(component, 'onChange');
    component.readOnly = true;
    const classificacao = 5;

    component.classificar(classificacao);
    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(component.classificacao).not.toBe(classificacao);
  })

})
