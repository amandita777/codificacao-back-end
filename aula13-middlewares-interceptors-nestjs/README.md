# 🚀 Aula 13 — Middlewares e Interceptors com NestJS

> Implementação de **middlewares** para logging e controle de acesso baseado em permissões.

---

## 📚 Sobre o projeto

Nesta aula foi desenvolvido um middleware responsável por interceptar as requisições da aplicação e realizar:

- 📝 Registro das requisições HTTP
- 🔐 Controle de acesso por perfil
- 🚫 Bloqueio de usuários sem permissão
- 📅 Registro da data e hora das respostas
- 🛡️ Proteção de rotas administrativas

---

## 🧩 Funcionalidades

### 📝 Logger Middleware

O middleware registra no console o método HTTP e a rota acessada.

```text
[LOG] Método: GET | Rota: /admin

🔐 Controle de acesso
As rotas protegidas verificam uma chave enviada através dos headers da requisição.

Rota	Permissão necessária	Header
/admin	administrador	api-key-admin
/secret	supervisor	api-key-secret

🛡️ Rotas protegidas
👨‍💼 /admin
Acesso permitido somente para usuários com a role:

administrador

Exemplo:

GET /admin
api-key-admin: administrador

Resposta:

{
  "mensagem": "Bem-vindo ao painel Administrativo!",
  "data": "2026-10-05T00:00:00.000Z"
}

🔒 /secret
Acesso permitido somente para usuários com a role:

supervisor

Exemplo:

GET /secret
api-key-secret: supervisor

Resposta:

{
  "mensagem": "Bem-vindo a rota secreta!",
  "data": "2026-10-05T00:00:00.000Z"
}

🚫 Acesso negado
Quando o usuário não possui a permissão necessária, a API retorna:

403 Forbidden

Exemplo:

{
  "statusCode": 403,
  "mensagem": "Acesso Negado: Privilégio de Administrador Necessário.",
  "data": "2026-10-05T00:00:00.000Z"
}

Para a rota secreta:

{
  "statusCode": 403,
  "mensagem": "Acesso negado: só pessoas autorizadas!",
  "data": "2026-10-05T00:00:00.000Z"
}

🛠️ Tecnologias utilizadas
<div align="center">



</div>
📁 Estrutura
src/
├── logger/
│   └── logger.middleware.ts
│
├── app.controller.ts
├── app.service.ts
└── main.ts

🎯 Objetivo da aula
O objetivo foi compreender na prática como utilizar Middlewares no NestJS para interceptar requisições antes que elas cheguem aos controllers, permitindo implementar funcionalidades como:

🔎 Logging + 🔐 Autorização + 🚫 Controle de acesso

👨‍💻 Desenvolvimento
Projeto desenvolvido durante os estudos de NestJS, explorando conceitos de arquitetura, middlewares e proteção de rotas.