import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('')
export class AppController {
  @Get()
  getPublic(){
   return{
    message: 'Rota publica acessada com sucesso!',
    data: new Date(),
   }
  }

  @Get('admin')
  getAdmin(){
   return{
    message: 'Bem-vindo ao painel Administrativo!',
    data: new Date(),
   }
  }
}
