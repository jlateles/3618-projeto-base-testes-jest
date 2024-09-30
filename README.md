# Implementando testes de unidades com Jest.

# Aplicação utilizada para realizar os testes: 
O Organo é um aplicativo organizador de leituras que permite cadastrar livros, incluindo informações como título, autoria, imagem, gênero, data da leitura e classificação.

🔨 Funcionalidades da aplicação

`Cadastro de livros`: Permite adicionar novos livros à lista, inserindo informações como título, autoria, imagem, gênero, data da leitura e classificação.

`Listagem de livros`: Exibe os livros cadastrados, separados por gênero literário, exibindo a imagem e demais informações.

✔️ Técnicas e tecnologias utilizadas:

`Angular`: Framework utilizado para construir a aplicação, na versão 17.

`Jest`: Estrutura de teste utilizada para realizar testes de unidade.

📁 Link do Figma:

[acessar o figma do projeto aqui](https://www.figma.com/file/GYv8FnRc51ZDfGmi2zzaQb/Organo-%7C-Angular?type=design&node-id=134-128&mode=design).

🛠️ Abrir e rodar o projeto

Vai precisar do NodeJS, versão 18 ou maior.
Após baixar o projeto,  precisa instalar as dependências utilizando o comando:
```bash
npm install
```
Depois, para executar o projeto em modo desenvolvimento:
```bash
ng serve
```
Então, acesse [http://localhost:4200/](url) no seu navegador.

⚙️Alguns comandos utilizados

- Para instalar o jest no projeto:
```
npm install jest @types/jest@29.5.12 @angular-builders/jest@17.0.3 --save-dev
```
- Para desinstalar o karma e o jasmine: 
```
npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter karma-coverage jasmine-core
rm karma.config.js
rm src/test.ts
```
- Para modificar configurações em algunas arquivos, atráves do Schematic:
```
ng add @briebug/jest-schematic
 ```
- Para rodar os testes no git bash:
```
ng test
```
- Para visualizar a cobertura de código, que é uma métrica que auxilia a entender o quão bem os testes conseguiram cobrir o código fonte da aplicação.
```
ng test --coverage
```
