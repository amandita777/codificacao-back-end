import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common";
import { ConflictException } from "@nestjs/common";
import { InternalServerErrorException } from "@nestjs/common";
import { BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { QueryFilter } from "mongoose";
import { CreateAlunoDto } from "./dto/create-alunos.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { Aluno } from "./schemas/aluno.schema.js";
import { AlunoDocument } from "./schemas/aluno.schema.js";
import { MongoServerError } from 'mongodb'

@Injectable()
export class AlunosService {
    constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>){}

    async create(createAlunoDto: CreateAlunoDto):Promise<Aluno>{

        try{
            const createAluno = new this.alunoModel(createAlunoDto);
            return await createAluno.save(); //!POST
        } catch(error: unknown){
            if(
                error instanceof MongoServerError
                &&
                error.code === 11000
            ){
                throw new ConflictException('Matrícula duplicada. A matrícula deve ser única.')
            }
            throw new InternalServerErrorException('Erro ao processar o cadastro do aluno. Por favor, tente novamente mais tarde.')
        }
    }

    async findAllPageFilter(
        page: number,
        limit: number,
        nome?:string,
        curso?:string,
        orderBy?:string,
        orderDirection?:'asc' | 'desc',
    ){

        const skip = (page - 1) * limit;
        const filtro: any = {};

        if(nome){
            filtro.nome = {
                $regex: new RegExp(nome, 'i'),
            };
        }

        if(curso){
            filtro.cursos = curso;
        }

        const sort: any = {};

        if(orderBy){
            sort[orderBy] = orderDirection === 'desc' ? -1 : 1;
        }

        const [data, total] = await Promise.all([
            this.alunoModel.find(filtro).sort(sort).skip(skip).limit(limit).exec(),
            this.alunoModel.countDocuments(filtro).exec()
        ]);

        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };

        return this.alunoModel.find().exec();
    } //!GET

    //async findAll():Promise<Aluno[]> {
    //    return this.alunoModel.find().exec();
   // } //!GET

    async findOne(id:string):Promise<Aluno>{
        const aluno = await this.alunoModel.findById(id).exec();
        if(!aluno){
            throw new NotFoundException(`Aluno com id ${id} não encontrado.`)
        }
        return aluno;
    } //!GET
    async Update(id:string, UpdateAlunoDto: UpdateAlunoDto): Promise<Aluno>{
        const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id,UpdateAlunoDto, {
            new: true
        }).exec();
        if(!alunoAtualizado){
            throw new NotFoundException(`Aluno com id ${id} não en contrado.`)
        }
        return alunoAtualizado;
    } //!PATCH
    async remove(id: string): Promise<Aluno>{
        const alunoRemovido = await this.alunoModel.findByIdAndDelete(id).exec();
        if(!alunoRemovido){
            throw new NotFoundException(`Aluno com id ${id} não encontrado.`)
        }
        return alunoRemovido;
    } //!DELETE
    //!CURD
}