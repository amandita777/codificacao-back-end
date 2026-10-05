import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get()
  getPublic(){
   return{
    mensagem: 'Rota publica acessada com sucesso!',
    data: new Date(),
   }
  }

  @Get('admin')
  getAdmin(){
   return{
    mensagem: 'Bem-vindo ao painel Administrativo!',
    data: new Date(),
   }
  }
  
  @Get('secret')
  getSecret(){
    return {
      mensagem: 'Bem-vindo a rota secreta!',
      data: new Date(),
    }
  }
}
