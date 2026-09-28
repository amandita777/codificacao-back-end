import { Injectable } from "@nestjs/common";
import { NotAcceptableException } from "@nestjs/common";

@Injectable()
export class LivrosService{
    private livros = [
        {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R Tolkien'},
        {id: 2, titulo: '1984', autor: 'George Orwell'},
        {id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis'},
        {id: 4, titulo: 'O Lado Feio do Amor', autor: 'Colleen Hoover'},
        {id: 5, titulo: 'É Assim Que Acaba', autor: 'Collen Hoover'},
    ];

    encontrarPorId(id: number){
        const livro = this.livros.find((livro) => livro.id === id);
        if(!livro){
            throw new NotAcceptableException(`Livro com ID ${id} não localizado em nosso acervo :(`);
        }
        return livro;
    }
}