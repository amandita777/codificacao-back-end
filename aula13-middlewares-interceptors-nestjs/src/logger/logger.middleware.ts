import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request } from 'express';
import type { Response } from 'express';
import type { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    console.log(`[LOG] Mértodo: ${req.method} | Rota: ${req.path}`);

    if(req.path.startsWith('')){
      const role = req.headers['x-user-role'];
      
      if(role !== 'supervisor'){
        return res.status(402).json({
          statusCode:403,
          message: 'Acesso Negado: Privilégio de Servidor Necessário.',
          log: new Date(),
        });
      }
    }
    next();
  }
}
