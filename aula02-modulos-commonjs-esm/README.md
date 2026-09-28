# 🚀 Aula 02 — Módulos e Sistema de Logs

> 📚 Atividades desenvolvidas durante a aula de Node.js sobre
> modularização e manipulação de arquivos.

---

## 📌 Conteúdos da aula

Durante esta aula foram trabalhados conceitos importantes do
**Node.js**, com foco em módulos, organização do código e criação
de um sistema simples de logs.

### 🧩 Módulos

- Configuração do projeto Node.js;
- Utilização do **ES Modules**;
- Configuração do `"type": "module"` no `package.json`;
- Criação e importação de módulos;
- Organização das funcionalidades em arquivos separados.

### 🛠️ Node.js

Foram utilizados os seguintes módulos:

| Módulo | Utilização |
|---|---|
| `fs/promises` | Criação e escrita de arquivos |
| `path` | Manipulação de caminhos |
| `url` | Obtenção do caminho do arquivo atual |

---

## 📝 Função `formatLog()`

Foi criada uma função responsável por formatar as mensagens
de log, adicionando **data e hora** automaticamente.

Exemplo:

```text
[2026-09-11 16:17:28] - Conexão com o banco de dados estabelecida!
[2026-09-11 16:17:28] - Inicialização do servidor concluída!