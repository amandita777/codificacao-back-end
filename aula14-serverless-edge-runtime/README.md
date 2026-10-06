# ⚡ Aula 14 — Serverless Edge Runtime

> Demonstração de uma função **Serverless executada no Edge Runtime da Vercel**, retornando informações sobre a execução da função.

---

## 🚀 Sobre o projeto

Este projeto demonstra como criar e executar uma função utilizando o **Edge Runtime**.

A função identifica informações da execução, como:

- 🌎 Região onde a função foi executada
- 🕐 Horário do servidor
- ⚡ Tempo de execução
- 🆔 ID da região fornecido pela Vercel

---

🧩 Tecnologias utilizadas / Tecnologia Utilização

🟦 TypeScript / Desenvolvimento da função

▲ Vercel  / Deploy e execução

⚡ Edge Runtime / Execução distribuída

📦 Serverless Functions / Backend sem servidor

---

▶️ Executando localmente
Instale as dependências:

npm install

Execute o projeto:

npm run dev

Depois acesse:

http://localhost:3000/api/hora-servidor

## 📁 Estrutura do projeto

```text
aula14-serverless-edge-runtime/
│
├── api/
│   └── hora-servidor.ts
│
├── .gitignore
├── package.json
└── README.md
