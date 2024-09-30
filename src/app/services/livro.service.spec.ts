import { Serializer } from "@angular/compiler";
import { GeneroLiterario, Livro } from "../componentes/livro/livro";
import { livros } from "../mock-livros";
import { ErroGeneroLiterario, LivroService } from "./livro.service"
import { TestBed } from "@angular/core/testing";

describe('Livro Service', () => {
  let service: LivroService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [LivroService]
    })
    service = TestBed.inject(LivroService);
  })

  it('Verificando se o service está criado', () => {
    expect(service).toBeTruthy();
  })

  it('Deve adicionar um novo livro', () => {
    const novoLivro: Livro = {
        titulo: 'Verdades Indestrutíveis',
        autoria: 'Autor Desconhecido',
        imagem: 'http://example.com/cover.jpg',
        genero: {id: 'romance', value: 'Romance'},
        dataLeitura: '2024-09-29',
        classificacao: 5
      };

    service.adicionarLivro(novoLivro);
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    expect(livrosPorGenero).toContain(novoLivro);
  })

  it('Deve recuperar corretamente os livros por gênero', () => {
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance');
    expect(livrosPorGenero).toEqual(livrosEsperados);
  })

  it('Deve inicializar os gêneros corretamente', () => {
    const generosEsperados: GeneroLiterario[] = [
      { id: 'romance', value: 'Romance' },
      { id: 'misterio', value: 'Mistério' },
      { id: 'fantasia', value: 'Fantasia' },
      { id: 'ficcao-cientifica', value: 'Ficção Científica' },
      { id: 'tecnicos', value: 'Técnicos' },
    ];
    expect(service.generos).toEqual(generosEsperados);
  })

  it('Deve lançar um erro ao tentar cadastrar um livro com gênero desconhecido', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http://example.com/cover.jpg',
      genero: {id: 'nao-existe', value: 'Não Existe'},
      dataLeitura: '2024-04-19',
      classificacao: 5
      };

      expect(() => service.adicionarLivro(novoLivro)).toThrow(ErroGeneroLiterario);
  })


})
