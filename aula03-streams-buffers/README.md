from pathlib import Path

readme = """# 🚀 Aula 03 — Streams e Buffers

<div align="center">

### 💻 Node.js • Streams • Buffers • Processamento de Logs

**Projeto desenvolvido durante a aula prática de Back-End**

</div>

---

## 📌 Sobre a aula

Nesta aula foi desenvolvido um exercício prático utilizando **Node.js** para compreender como trabalhar com **Streams e Buffers** no processamento de arquivos.

O projeto simula um servidor que gera uma grande quantidade de registros de log e, posteriormente, processa esse arquivo para encontrar somente as mensagens classificadas como **`ERROR`**.

> 🎯 **Objetivo:** aprender a trabalhar com arquivos grandes de forma eficiente, utilizando Streams para leitura e escrita sem precisar carregar todo o conteúdo na memória.

---

## 🛠️ Tecnologias utilizadas

<div align="center">

| Tecnologia | Utilização |
|:---:|:---|
| 🟢 **Node.js** | Execução do projeto |
| 📦 **fs** | Leitura e escrita de arquivos |
| 🌊 **Streams** | Processamento de dados em fluxo |
| 📖 **readline** | Leitura do arquivo linha por linha |
| 🧠 **process.memoryUsage()** | Monitoramento do consumo de memória |
| 🧩 **ES Modules** | Organização dos módulos JavaScript |

</div>

---

## 📂 Estrutura do projeto

```text
📦 aula03-streams-buffers
│
├── 📄 apenas_erros.log
├── 📄 gerarLogGigante.js
├── 📄 package.json
├── 📄 processarLogs.js
├── 📄 servidor.log
└── 📄 README.md