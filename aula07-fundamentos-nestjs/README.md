## Aula 07 — Fundamentos do NestJS

### Desenvolvimento

Nesta aula foi criado um projeto utilizando **NestJS**, começando pela instalação do NestJS CLI através do CMD:

```bash
npm install -g @nestjs/cli

# app.service.ts

Foi criado o método getHello() para retornar uma mensagem personalizada:
getHello(): string {
  return 'Servidor Nest.JS - Aula 07 Ativo!';
}

# app.controller.ts

Foi configurado o Controller com o prefixo da rota api:
@Controller('api')

O Controller também utiliza o AppService para retornar a mensagem através do método getHello():
@Get()
getHello(): string {
  return this.appService.getHello();
}

# Estrutura utilizada

aula07-fundamentos-nestjs/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── node_modules/
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
└── README.md

# Resultado

A aplicação NestJS foi configurada com:
- Service: responsável por retornar a mensagem da aula.
- Controller: configurado com a rota /api.
- GET: utilizado para acessar o método getHello().
- Injeção de dependência: AppService utilizado pelo AppController.
Mensagem retornada:
Servidor Nest.JS - Aula 07 Ativo!