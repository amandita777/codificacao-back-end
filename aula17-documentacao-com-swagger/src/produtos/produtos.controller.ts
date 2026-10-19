import { Controller } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { ApiResponse } from "@nestjs/swagger";
import { CreateProdutoDto } from "./dto/create-produto.dto.js";

@ApiTags('produtos')
@Controller('produtos')

export class ProdutosController {
    @Post()
    @ApiOperation({ summary: 'Cadastra um novo produto de catálogo' })
    @ApiResponse({ status: 201, description: 'Produto cadastrado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Paylod enviado contém dados inválidos.' })
    async create(@Body() CreateProdutoDto: CreateProdutoDto) {
        return {
            id: 101,
            ...CreateProdutoDto,
            criadoEm: new Date().toISOString(),
        };
    }
}