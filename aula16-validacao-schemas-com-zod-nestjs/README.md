# 🚀 Aula 16 — Validação de Schemas com Zod e NestJS

Nesta aula, foi implementada uma validação de dados utilizando **Zod** integrada ao **NestJS**, com o objetivo de garantir que as informações recebidas pela API atendam aos critérios definidos antes de serem processadas.

## 📚 Conteúdos desenvolvidos

* ⚙️ **Configuração do NestJS:** organização dos módulos, controllers e services da aplicação.
* 🧩 **Criação do `colaborador.schema.ts`:** definição de um schema com Zod para validar os dados dos colaboradores.
* 📝 **Validação dos campos:**

  * `nome`: texto com no mínimo 3 caracteres.
  * `email`: endereço de e-mail válido.
  * `idade`: número entre 18 e 65 anos.
  * `departamento`: aceita somente `TI`, `RH` ou `Financeiro`.
* 🔍 **Criação do `ZodValidationPipe`:** implementação de um pipe personalizado para validar os dados recebidos no corpo das requisições.
* 🚨 **Tratamento de erros:** utilização de `BadRequestException` para retornar o status HTTP 400 quando os dados forem inválidos, incluindo os campos e as mensagens de erro.
* 👥 **Criação do `ColaboradoresController`:** implementação da rota `POST /colaboradores` para receber e validar os dados de um novo colaborador.
* 🔗 **Integração com o NestJS:** registro do controller e do pipe no módulo principal da aplicação.
* 🖥️ **Configuração do servidor:** inicialização da aplicação na porta definida por `process.env.PORT`, utilizando a porta `3000` como padrão.

## 🛠️ Tecnologias utilizadas

* TypeScript
* NestJS
* Zod
* Node.js
* Insomnia para testar as requisições HTTP

## 🔄 Como funciona

Quando uma requisição `POST /colaboradores` é enviada, o `ZodValidationPipe` verifica os dados recebidos com base no schema definido. Se todas as informações forem válidas, a API retorna uma mensagem de sucesso junto com os dados do colaborador. Caso algum campo não atenda às regras, a API retorna um erro HTTP 400 com os detalhes da validação.

## ✅ Resultado

Implementação de uma API com validação de dados estruturada, mensagens de erro personalizadas e integração entre Zod e NestJS, tornando o cadastro de colaboradores mais seguro e consistente.