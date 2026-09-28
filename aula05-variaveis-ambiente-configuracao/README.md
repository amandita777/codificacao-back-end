# 🚀 Aula 05 — Variáveis de Ambiente e Configuração

Nesta aula foi implementada a configuração de variáveis de ambiente em uma aplicação **Node.js**, utilizando o pacote **dotenv**.

### 🔧 Alterações realizadas

- 📦 Instalação da dependência `dotenv`;
- ⚙️ Configuração do projeto para utilizar `"type": "module"`;
- 🔐 Configuração do carregamento das variáveis com `dotenv.config()`;
- 🌐 Configuração da variável `PORT`;
- 💳 Configuração da variável `API_KEY_PAGAMENTO`;
- 🗄️ Configuração da variável `DATABASE_URL`;
- 🔑 Utilização de `process.env` para acessar as variáveis;
- 🧪 Validação da variável `API_KEY_PAGAMENTO`;
- 🛑 Encerramento da aplicação caso a chave da API não esteja configurada;
- 📋 Criação do arquivo `.env.example`;
- 🚫 Configuração do `.gitignore` para proteger o `.env`;
- 📄 Atualização do `package.json`;
- 📦 Atualização do `package-lock.json`;
- 🖥️ Implementação de mensagens de configuração no console.

### 📂 Arquivos envolvidos

```text
app.js
package.json
package-lock.json
.env
.env.example
.gitignore
README.md