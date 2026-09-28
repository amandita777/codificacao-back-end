# 🚀 Aula 12 — Requisição, Resposta e Segurança com API Key no NestJS

Nesta aula foi dado continuidade ao desenvolvimento da API utilizando **NestJS**, trabalhando com conceitos de **requisição e resposta HTTP**, **Headers**, **API Key** e **códigos de status HTTP**.

## 📚 Conteúdos desenvolvidos

- ⚙️ Manutenção da estrutura principal da aplicação NestJS.
- 🔄 Implementação da comunicação entre **Controller** e **Service**.
- 📡 Criação da rota `GET /status` para verificar o status do servidor.
- 🛠️ Utilização do `AppService` para retornar a mensagem:
  `Status: Servidor Ativo!`
- 🔐 Criação do `SegurancaController` para controlar o acesso a um conteúdo protegido.
- 🗝️ Utilização do Header `x-api-key` para receber a chave de autenticação.
- 📥 Utilização de `@Headers()` para acessar informações enviadas no cabeçalho da requisição.
- 📤 Utilização de `@Res()` para controlar manualmente a resposta HTTP.
- ✅ Validação da API Key recebida na requisição.
- 🔓 Retorno do status `200` quando a chave informada é válida.
- 🚫 Retorno do status `403 Forbidden` quando a chave é inválida ou não informada.
- 🧾 Inclusão de informações como mensagem e `timestamp` na resposta de acesso autorizado.
- 🧩 Registro do `SegurancaController` no `AppModule`.

## 🔐 Controle de acesso

Foi criada uma rota protegida utilizando uma API Key enviada através do Header:

```http
x-api-key: SENAI-2026

Quando a chave informada corresponde à chave esperada, a API retorna uma resposta de sucesso:

{
 "mensagem": "Acesso concedido ao conteúdo secreto!",  "timestamp": "data da requisição"
}

Além disso, o Header x-auth é configurado na resposta para indicar que a autenticação foi verificada:

x-auth: verificado

Caso a API Key seja inválida ou não seja enviada, a API retorna:

{ 
 "erro": "Forbidden",
 "mensagem": "Chave de API inválida ou ausente" 
 }

 com o código HTTP:

403 Forbidden
  🧱 Estrutura desenvolvida
    src/
   ├── app.controller.ts
   ├── app.module.ts
   ├── app.service.ts
   ├── main.ts
   └── seguranca.controller.ts