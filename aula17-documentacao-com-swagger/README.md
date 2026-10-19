# 🚀 Aula 17 — Documentação da API com Swagger no NestJS

Nesta aula foi desenvolvida a documentação interativa de uma API utilizando **NestJS e Swagger**, com o objetivo de facilitar a visualização, a compreensão e os testes dos endpoints da aplicação.

## 📚 Conteúdos desenvolvidos

- 📦 **Criação do DTO (`CreateProdutoDto`):** definição dos dados necessários para o cadastro de produtos, incluindo nome, preço e categoria.
- 📝 **Documentação dos atributos:** utilização do decorador `@ApiProperty()` para adicionar exemplos e descrições aos campos do DTO.
- 🎮 **Criação do `ProdutosController`:** implementação da rota `POST /produtos` para receber os dados de um novo produto.
- 🏷️ **Organização da documentação:** utilização de `@ApiTags('produtos')` para agrupar os endpoints na interface Swagger.
- 📖 **Documentação da operação:** aplicação de `@ApiOperation()` para descrever a finalidade da rota e `@ApiResponse()` para documentar as respostas HTTP esperadas.
- 🔗 **Integração com o módulo principal:** registro do `ProdutosController` no `AppModule`.
- ⚙️ **Configuração do Swagger:** utilização de `DocumentBuilder`, `SwaggerModule.createDocument()` e `SwaggerModule.setup()` no arquivo `main.ts`.
- 🔐 **Configuração de autenticação:** inclusão de `addBearerAuth()` na configuração do Swagger para documentar a autenticação via Bearer Token.

## 🛠️ Tecnologias utilizadas

- NestJS
- TypeScript
- Swagger / OpenAPI
- Node.js
- npm

## 🌐 Acesso à documentação

Após iniciar o servidor de desenvolvimento, a documentação interativa pode ser acessada em:

`http://localhost:3000/docs`

A interface permite visualizar as rotas documentadas, consultar os exemplos dos dados esperados e testar as requisições diretamente pelo navegador.

## 🎯 Resultado

A API passou a contar com uma documentação estruturada e interativa, facilitando o entendimento dos endpoints e a integração com outros sistemas. A atividade também permitiu praticar a criação de DTOs, a documentação de Controllers e a integração do Swagger ao NestJS.