# 🚀 Aula 15 — Tratamento de Erros e Códigos de Status com NestJS

Nesta aula foi desenvolvido o tratamento de erros e códigos de status em uma API utilizando **NestJS**, além da criação de uma estrutura para gerenciamento e consulta de produtos.

## 📚 Conteúdos desenvolvidos

- ⚙️ Atualização do `AppService` para retornar o status do servidor:
  `Status: Servidor Ativo!!`
- 🌐 Configuração da rota `GET /status` no `AppController`.
- 📦 Criação do `ProdutosService` para gerenciamento dos produtos.
- 🛍️ Criação de uma lista de produtos contendo **ID, nome e preço**.
- 🔎 Implementação da rota `GET /produtos` para listar todos os produtos.
- 🔍 Implementação da rota dinâmica `GET /produtos/:id` para buscar um produto pelo ID.
- ⚠️ Utilização do `BadRequestException` para tratar IDs inválidos ou não numéricos.
- ❌ Utilização do `NotFoundException` quando o produto solicitado não é encontrado.
- 📝 Implementação do `Logger` do NestJS para registrar tentativas de busca inválidas e produtos não localizados.
- 🔢 Conversão do parâmetro recebido para número utilizando `Number()`.
- 🧪 Validação do ID utilizando `isNaN()`.
- 🔗 Integração entre `ProdutosController` e `ProdutosService` através de injeção de dependência.

---

Ao iniciar:

npm run start:dev

o terminal deve mostrar algo parecido com:

[Nest] ...  LOG [NestFactory] Starting Nest application...

[Nest] ...  LOG [InstanceLoader] AppModule dependencies initialized

[Nest] ...  LOG [RoutesResolver] AppController {/status}:

[Nest] ...  LOG [RouterExplorer] Mapped {/status, GET} route

[Nest] ...  LOG [RoutesResolver] ProdutosController {/produtos}:

[Nest] ...  LOG [RouterExplorer] Mapped {/produtos, GET} route

[Nest] ...  LOG [RouterExplorer] Mapped {/produtos/:id, GET} route

[Nest] ...  LOG [NestApplication] Nest application successfully started

E no navegador acessando:

http://localhost:3000/status

aparece:

Status: Servidor Ativo!!

---

Para os produtos / Por exemplo:

GET http://localhost:3000/produtos/3

retorna:

{
  "id": 3,

  "nome": "Monitor 144Hz",
  
  "preco": 899.99
}