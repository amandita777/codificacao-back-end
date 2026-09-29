# 🚀 Aula 13 — Middlewares e Controle de Acesso com NestJS

Nesta aula foi dada continuidade ao desenvolvimento da API utilizando **NestJS**, com a implementação de **Middlewares**, registro de requisições e controle de acesso baseado em função do usuário.

## 📚 Conteúdos desenvolvidos

- 🛡️ Criação do `LoggerMiddleware` utilizando `NestMiddleware`.
- 📝 Implementação de logs contendo:
  - Método HTTP utilizado;
  - Rota acessada.
- 🔐 Implementação de controle de acesso através do header `x-user-role`.
- 👤 Validação da função do usuário para acesso a rotas administrativas.
- 🚫 Retorno de erro `402` quando o usuário não possui a função `supervisor`.
- 🌐 Criação da rota pública `GET /`, permitindo acesso sem autenticação administrativa.
- ⚙️ Criação da rota `GET /admin` para acesso ao painel administrativo.
- 🔧 Configuração do `MiddlewareConsumer` no `AppModule`.
- 🔄 Aplicação do `LoggerMiddleware` em todas as rotas utilizando `forRoutes('*')`.
- 📅 Inclusão de data/hora nas respostas das rotas e nos registros de acesso.
- 🧩 Organização da aplicação utilizando `AppController`, `AppService` e `LoggerMiddleware`.

## 💻 Resultado

A aplicação passou a contar com um middleware responsável por registrar as requisições e também com uma verificação de função para proteger a rota administrativa, permitindo o acesso somente quando o usuário possui a função:

`supervisor`
