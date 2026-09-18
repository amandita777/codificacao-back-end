# 🚀 Aula 08 — Rotas GET, POST, PATCH e DELETE com NestJS

Nesta aula foi desenvolvida e aprimorada uma API utilizando **NestJS**, trabalhando com **Controllers, Services, DTOs** e métodos HTTP **GET, POST, PATCH e DELETE**, além da implementação de operações para gerenciamento de convidados.

## 📚 Conteúdos desenvolvidos

- ⚙️ Configuração e inicialização da aplicação NestJS.
- 🟢 Criação do **AppService** com o método `getHello()`, retornando `Status: Ativo!`.
- 🟢 Configuração do **AppController** com a rota `GET /status`.
- 👥 Criação do **ConvidadosController**.
- 🔧 Criação do **ConvidadosService** para centralizar as operações relacionadas aos convidados.
- 🔎 Implementação da rota `GET /convidados` para listar todos os convidados.
- 🔍 Implementação do método `findOne()` para buscar um convidado pelo seu ID.
- ➕ Implementação da rota `POST /convidados` para receber dados de convidados.
- 📦 Utilização de `@Body()` para receber dados enviados na requisição.
- 📝 Utilização do `CriarConvidadoDto` para organização dos dados recebidos.
- ✏️ Implementação da rota `PATCH /convidados/:id` para atualizar a idade de um convidado.
- 🔄 Criação do método `atualizarIdade()` no `ConvidadosService`.
- 🗑️ Implementação da rota `DELETE /convidados/:id` para remover um convidado.
- ❌ Criação do método `removerConvidado()` para excluir convidados pelo ID.
- ⚠️ Utilização de `NotFoundException` para informar quando um convidado não é encontrado.
- 🔢 Utilização de `@Param('id')` para receber o ID do convidado através da URL.
- 🚫 Utilização de `@HttpCode(204)` na operação de exclusão.
- 🧑‍💻 Adição de mensagens no `console.log()` para acompanhar as operações realizadas pela API.
- 🔗 Configuração dos Controllers e Providers no **AppModule**.
- ▶️ Configuração do `main.ts` para execução do servidor na porta definida em `process.env.PORT` ou `3000`.
- 💻 Execução do projeto em modo desenvolvimento com `npm start:dev`.
- 🔍 Utilização do `Get-ChildItem -Force` para visualizar arquivos e pastas, incluindo arquivos ocultos.
- 🗑️ Utilização do `Remove-Item -Recurse -Force .git` para remover o repositório Git local e reinicializar o controle de versão.

## 🌐 Métodos HTTP implementados

| Método | Rota | Função |
|---|---|---|
| `GET` | `/status` | Verificar o status da API |
| `GET` | `/convidados` | Listar todos os convidados |
| `POST` | `/convidados` | Receber dados de um convidado |
| `PATCH` | `/convidados/:id` | Atualizar a idade de um convidado |
| `DELETE` | `/convidados/:id` | Remover um convidado |

## 👥 Lista inicial de convidados

O `ConvidadosService` passou a trabalhar com uma lista de convidados contendo:

- 👩 Alice — 23 anos
- 👨 Enzo — 19 anos
- 👩 Jamylly — 20 anos
- 👩 Alessandra — 18 anos
- 👨 Hudson — 21 anos

## 📂 Arquivos adicionados/modificados

```text
src/
├── dto/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── convidados.controller.ts
├── convidados.service.ts
└── main.ts