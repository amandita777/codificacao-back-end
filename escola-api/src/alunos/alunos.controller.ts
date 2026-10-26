import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Patch } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { Delete } from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-alunos.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";

@Controller ('alunos')
export class AlunosController {
    constructor(private readonly alunoService: AlunosService){}
    @Post()
    create(@Body() createAlunoDto: CreateAlunoDto){
        return this.alunoService.create(createAlunoDto);
    }
    @Get()
    findAll(){
        return this.alunoService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.alunoService.findOne(id);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto){
        return this.alunoService.Update(id, updateAlunoDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.alunoService.remove(id);
    }
}