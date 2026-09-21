# 🚀 Aula 08 — Rotas GET, POST, PATCH e DELETE com NestJS

Nesta aula foi desenvolvida e aprimorada uma API utilizando **NestJS**, trabalhando com **Controllers, Services, DTOs** e métodos HTTP **GET, POST, PATCH e DELETE**, além da implementação de operações para gerenciamento de convidados.

Também foram utilizados os softwares **Insomnia** e **Postman** para realizar testes nas rotas e verificar o funcionamento da API.

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

| Método   | Rota              | Função                            |
| -------- | ----------------- | --------------------------------- |
| `GET`    | `/status`         | Verificar o status da API         |
| `GET`    | `/convidados`     | Listar todos os convidados        |
| `POST`   | `/convidados`     | Cadastrar um novo convidado       |
| `PATCH`  | `/convidados/:id` | Atualizar a idade de um convidado |
| `DELETE` | `/convidados/:id` | Remover um convidado              |

## 🧪 Testes da API com Insomnia e Postman

Durante a aula, foram utilizados o **Insomnia** e o **Postman** para testar as rotas criadas no NestJS.

O funcionamento dos testes aconteceu da seguinte forma:

### 1️⃣ Inicialização do servidor

Primeiramente, a aplicação NestJS foi iniciada em modo de desenvolvimento utilizando:

```bash
npm start:dev
```

Com o servidor em execução, a API ficou disponível localmente, utilizando a porta configurada no projeto.

### 2️⃣ Criação das requisições

Depois, no **Insomnia** e no **Postman**, foram criadas requisições HTTP para cada uma das rotas da API.

Foi necessário informar:

- 🌐 A URL da API.
- 🔵 O método HTTP utilizado.
- 📦 Os dados enviados no corpo da requisição, quando necessário.
- 🔢 O ID do convidado, quando a rota precisava identificar um registro específico.

### 3️⃣ Teste da rota GET

Para consultar os convidados, foi utilizada a requisição:

```http
GET /convidados
```

A API recebeu a solicitação e retornou a lista de convidados cadastrados no `ConvidadosService`.

Também foi possível utilizar o ID para buscar um convidado específico.

### 4️⃣ Teste da rota POST

Para adicionar um convidado, foi utilizada:

```http
POST /convidados
```

Nesse caso, os dados foram enviados no corpo da requisição.

O `@Body()` do Controller recebeu essas informações e o `CriarConvidadoDto` foi utilizado para organizar os dados enviados.

Exemplo de dados enviados:

```json
{
  "nome": "Amanda",
  "idade": 18
}
```

### 5️⃣ Teste da rota PATCH

Para alterar a idade de um convidado, foi utilizada:

```http
PATCH /convidados/1
```

O número `1` representa o ID do convidado que seria atualizado.

O ID foi recebido através do:

```typescript
@Param('id')
```

Depois disso, o método `atualizarIdade()` do `ConvidadosService` realizou a alteração.

### 6️⃣ Teste da rota DELETE

Para remover um convidado, foi utilizada:

```http
DELETE /convidados/1
```

Novamente, o ID foi passado diretamente pela URL.

O `ConvidadosService` realizou a remoção através do método `removerConvidado()`.

A API utiliza:

```typescript
@HttpCode(204)
```

para indicar que a operação foi concluída sem retornar conteúdo no corpo da resposta.

### 7️⃣ Verificação das respostas

Após enviar cada requisição, foi possível verificar no **Insomnia** e no **Postman**:

- ✅ Código de status HTTP.
- 📦 Dados retornados pela API.
- 📝 Mensagens de resposta.
- 🔄 Alterações realizadas nos convidados.
- ❌ Erros quando um convidado não era encontrado.

Dessa forma, os clientes HTTP foram utilizados para confirmar, na prática, se as rotas desenvolvidas no NestJS estavam funcionando corretamente.

## ⭐ Experiência com Insomnia e Postman

Foram utilizados os dois programas para realizar os testes da API:

### 🔵 Postman

O **Postman** foi utilizado para criar e enviar requisições HTTP, permitindo testar as diferentes operações da API e visualizar suas respostas.

### 🟣 Insomnia

O **Insomnia** também foi utilizado para realizar os testes das rotas.

Durante a utilização das duas ferramentas, foi possível comparar a experiência de criação e envio das requisições.

### 💜 Ferramenta escolhida

Entre o **Postman** e o **Insomnia**, a ferramenta que mais gostei de utilizar foi o **Insomnia**.

A escolha aconteceu principalmente porque achei sua interface **mais simples, prática e fácil de mexer**. Durante os testes, foi mais fácil criar as requisições, selecionar os métodos HTTP e visualizar as respostas da API.

Por esse motivo, o **Insomnia acabou sendo minha ferramenta preferida para realizar os testes da API** durante esta aula.

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
```

## 🎯 Resultado da aula

Ao final da aula, foi possível desenvolver uma API REST utilizando **NestJS** e testar suas principais operações através do **Insomnia** e do **Postman**.

Foram praticadas operações de:

```text
GET     → Consultar dados
POST    → Adicionar dados
PATCH   → Atualizar dados
DELETE  → Remover dados
```

Além do desenvolvimento das rotas, a utilização do Insomnia e do Postman permitiu verificar na prática como uma API recebe requisições, processa as informações e retorna respostas ao cliente.
