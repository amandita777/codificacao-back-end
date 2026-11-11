import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Patch } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { Delete } from "@nestjs/common";
import { Query } from "@nestjs/common";
import { DefaultValuePipe } from "@nestjs/common";
import { ParseIntPipe } from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-alunos.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger";
import { ApiResponse } from "@nestjs/swagger";
import { ApiQuery } from "@nestjs/swagger";

@ApiTags('alunos')
@Controller ('alunos')
export class AlunosController {
    constructor(private readonly alunoService: AlunosService){}
    @Post()
    @ApiOperation({
        summary: 'Cria a matrícula do aluno',
    })
    @ApiResponse({
        status: 201,
        description: 'A matrícula do aluno foi criada com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Dados inválidos fornecidos para criar a matrícula do aluno.',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor, matrícula duplicada ou serviço indisponível.',
    })
    create(@Body() createAlunoDto: CreateAlunoDto){
        return this.alunoService.create(createAlunoDto);
    }
    //@Get()
    //@ApiOperation({
    //    summary: 'Retorna a lista de alunos cadastrados.',
   // })
   // @ApiResponse({
    //    status: 200,
    //    description: 'Lista de alunos retornada com sucesso.',
  //  })
    //@ApiResponse({
   //     status: 404,
   //     description: 'Nenhum aluno encontrado.',
   // })
   // @ApiResponse({
   //     status: 500,
   //     description: 'Erro interno do servidor ou servidor indisponível.',
   // })
    //findAll(){
    //    return this.alunoService.findAll();
   // }

    @Get()
    @ApiOperation({
        summary: 'Retorna a lista de alunos cadastrados com paginação e filtros opcionais.',
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de alunos retornada com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Nunhem aluno encontrado.',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno no servidor ou serviço indisponível.',
    })
    @ApiQuery({
        name: 'page',
        required: false,
        type: Number,
        description: 'Número da página (padrão: 1)'
    })
    @ApiQuery({
        name: 'limit',
        required: false,
        type: Number,
        description: 'Itens por página (padrão: 10)'
    })
    @ApiQuery({
        name: 'nome',
        required: false,
        type: String,
        description: 'Filtra alunos pelo nome.',
    })
    @ApiQuery({
        name: 'cursos',
        required: false,
        type: String,
        description: 'Filtra alunos pelo curso',
    })
    findAllPage(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('nome') nome?:string, 
        @Query('curso') curso?:string, 
    ){
        return this.alunoService.findAllPage(page, limit, nome, curso);
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Retorna um aluno específico pelo _id.',
    })
    @ApiResponse({
        status: 200,
        description: 'Aluno retornado com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo _id.'
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ou servidpr indisponível.',
    })
    findOne(@Param('id') id: string){
        return this.alunoService.findOne(id);
    }
    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar os dados de um aluno específico pelo _id.'
    })
    @ApiResponse({
        status: 200,
        description: 'Aluno removido com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo _id.'
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ou servidor indisponível.',
    })
    update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto){
        return this.alunoService.Update(id, updateAlunoDto);
    }
    @Delete(':id')
     @ApiOperation({
        summary: 'Remove aluno pelo _id.'
    })
    @ApiResponse({
        status: 200,
        description: 'Aluno removido com sucesso.',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo _id.'
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ou servidor indisponível.',
    })
    remove(@Param('id') id: string){
        return this.alunoService.remove(id);
    }
}