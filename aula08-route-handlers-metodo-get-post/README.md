# 🚀 Aula 08 — Rotas GET e POST com NestJS

Nesta aula foi desenvolvida uma API utilizando **NestJS**, trabalhando com Controllers, Services, DTOs e métodos HTTP `GET` e `POST`.

## 📚 Conteúdos desenvolvidos

- ⚙️ Configuração e inicialização da aplicação NestJS.
- 🟢 Criação do `AppService` com o método `getHello()`, retornando `Status: Ativo!`.
- 🟢 Configuração do `AppController` com a rota `GET /status`.
- 👥 Criação do `ConvidadosController`.
- 🔎 Implementação da rota `GET /convidados` para listar convidados.
- ➕ Implementação da rota `POST /convidados` para adicionar convidados.
- 📦 Utilização de `@Body()` para receber dados enviados na requisição.
- 📝 Utilização do `CriarConvidadoDto` para organização dos dados.
- 🔗 Configuração dos Controllers e Providers no `AppModule`.
- ▶️ Configuração do `main.ts` para execução do servidor na porta definida em `process.env.PORT` ou `3000`.
- 💻 Execução do projeto em modo desenvolvimento com `npm start:dev`.
- 🔍 Utilização do `Get-ChildItem -Force` para visualizar arquivos e pastas, incluindo arquivos ocultos.
- 🗑️ Utilização do `Remove-Item -Recurse -Force .git` para remover o repositório Git local e reinicializar o controle de versão.

## 💻 Comandos utilizados

```powershell
Remove-Item -Recurse -Force .git
Get-ChildItem -Force
npm start:dev