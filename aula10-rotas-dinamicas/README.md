# 🚀 Aula 10 — Rotas Dinâmicas de Livros com NestJS

Nesta aula foi dada continuidade ao desenvolvimento da API utilizando **NestJS**. 
Os arquivos `app.service.ts` e `app.controller.ts`, que já haviam sido desenvolvidos anteriormente, foram mantidos e integrados à nova funcionalidade de gerenciamento de livros.

## 📚 Conteúdos desenvolvidos

- 📖 Criação do `LivrosService` para gerenciamento dos livros.
- 🎯 Criação do `LivrosController` para disponibilizar as rotas de livros.
- 🔎 Implementação de busca de livros através do **ID**.
- 🔢 Utilização de `@Param()` para receber parâmetros diretamente pela URL.
- 🔄 Conversão do parâmetro recebido utilizando `ParseIntPipe`.
- ⚠️ Tratamento de erro utilizando `NotAcceptableException`.
- 🧩 Integração do `LivrosService` e `LivrosController` no `AppModule`.
- 🧪 Testes das rotas utilizando o **Insomnia**.

## 📖 Livros cadastrados

Foi criado um acervo inicial contendo livros com:

- ID
- Título
- Autor

Exemplos utilizados:

```text
1 - O Senhor dos Anéis — J.R.R. Tolkien
2 - 1984 — George Orwell
3 - Dom Casmurro — Machado de Assis
4 - O Lado Feio do Amor — Colleen Hoover
5 - É Assim Que Acaba — Colleen Hoover