## 🚀 Aula 06 — Servidor Web HTTP com Node.js

Nesta aula foi desenvolvido um servidor web HTTP utilizando o módulo nativo `http` do Node.js.

Foram realizadas as seguintes implementações:

- ⚙️ Configuração do projeto através do `package.json`;
- 📦 Configuração do projeto para utilizar **ES Modules** com `"type": "module"`;
- 🌐 Criação de um servidor HTTP utilizando `http.createServer()`;
- 📝 Registro no console do método HTTP e da URL recebida;
- 🔐 Implementação dos cabeçalhos de segurança:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
- ❤️ Criação da rota `/status`;
- ✅ Retorno do status `200` quando o servidor está online;
- 📄 Retorno das respostas no formato `application/json`;
- ❌ Tratamento de páginas/rotas inexistentes com status `404`;
- 🔌 Configuração do servidor para funcionar na porta `3000`;
- 📂 Organização dos arquivos `package.json`, `servidor.js` e `README.md`.


## 📋 Resultado
{
  "servidor": "Online"
}

{
  "erro": "Página não encontrada"
}

### 💻 Execução

Para iniciar o servidor:

```bash
node servidor.js